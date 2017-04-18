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

const tripFromCampusCreateBuilder = <SecureRouteBuilder>new SecureRouteBuilder('/Marilyn', (req, res, token) => {
console.log("HI GRAHAM");
}, PermissionLevel.DJ)
        .setIsAjax(true)
        .setHttpMethod(HttpMethod.POST);


const fromCampusCreateRoutes: SecureRoute = new SecureRoute(tripFromCampusCreateBuilder);

const secureRoutes = [

    fromCampusCreateRoutes
];

routeManager.addSecureRoutes(secureRoutes);

app.get('/*', (_, res: express.Response) => {
    console.log("Pikachu I choose you!");
    res.sendFile(path.resolve(`${clientDir}/../index.html`));

});
app.listen(port);
console.log('ready to listen on', port);



