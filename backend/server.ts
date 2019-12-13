import * as jsonServer from 'json-server';
import * as fs from 'fs';
import * as https from 'https';
import { Application, Router, RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { handleAuth } from './auth';

const server: Application = jsonServer.create();
const router: Router = jsonServer.router('db.json');
const middlewares: RequestHandler<ParamsDictionary>[] = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

//login middleware
server.post('/login', handleAuth);

// Use default router
server.use(router);

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
};

const port = 3001;

https.createServer(options, server).listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
