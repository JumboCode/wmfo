import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as database from './database';
import { HttpMethod, RouteManager, InsecureRoute, InsecureRouteBuilder, SecureRoute, SecureRouteBuilder } from './utils/routeUtils';
const app: express.Express = express();
import { PermissionLevel } from './utils/requestUtils';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const clientDir: string = `${__dirname}/../client/dist/`;
app.use('/static/', express.static(path.resolve(clientDir)));

const port: number = 5000;

app.get('/test', (req, res) => {
	console.log(req.headers);
	database.printing();
	res.send('ok');
});

const routeManager = new RouteManager(app);


const scheduleBuilder = <SecureRouteBuilder>new SecureRouteBuilder('/schedule', (req, res, token) => {
console.log("Welcome to the WMFO scheduling page");
}, PermissionLevel.DJ)
        .setIsAjax(true)
        .setHttpMethod(HttpMethod.GET);

const addDJBuilder = <SecureRouteBuilder>new SecureRouteBuilder('/addDJ', (req, res, token) => {
console.log("Adding DJ");
}, PermissionLevel.EXEC)
        .setIsAjax(true)
        .setHttpMethod(HttpMethod.POST);

const removeDJBuilder = <SecureRouteBuilder>new SecureRouteBuilder('/removeDJ', (req, res, token) => {
console.log("removing DJ");
}, PermissionLevel.EXEC)
        .setIsAjax(true)
        .setHttpMethod(HttpMethod.POST);

const loginBuilder = <InsecureRouteBuilder>new InsecureRouteBuilder('/login', 
                                                          (req, res) => 
{ console.log("Welcome to the WMFO login page");}) 
        .setIsAjax(true)
        .setHttpMethod(HttpMethod.GET);


const scheduleRoute: SecureRoute = new SecureRoute(scheduleBuilder);
const addDJRoute: SecureRoute = new SecureRoute(addDJBuilder);
const removeDJRoute: SecureRoute = new SecureRoute(removeDJBuilder);
const loginRoute: InsecureRoute = new InsecureRoute(loginBuilder);



const secureRoutes = [
    scheduleRoute,
    addDJRoute,
    removeDJRoute
];


const insecureRoutes = [
    loginRoute
];


routeManager.addSecureRoutes(secureRoutes);
routeManager.addInsecureRoutes(insecureRoutes);

app.get('/*', (_, res: express.Response) => {
    console.log("Pikachu I choose you!");
    res.sendFile(path.resolve(`${clientDir}/../index.html`));

});
app.listen(port);
console.log('ready to listen on', port);



