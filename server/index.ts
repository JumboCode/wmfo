import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as database from './database';

const app: express.Express = express();

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

app.get('/*', (_, res: express.Response) => {
    console.log(_);
    res.sendFile(path.resolve(`${clientDir}/../index.html`));

});
app.listen(port);
console.log('ready to listen on', port);
