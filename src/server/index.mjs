// Adds data from .env-file into process.env
// require('dotenv')
//   .config();

import 'isomorphic-fetch';
import './util/errors/unhandled-errors.mjs';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import combineRouters from 'koa-combine-routers';

import logger from './util/logger';
import middlewares from './middleware';
import errorMiddlewares from './util/errors/error-middlewares.mjs';

import list from './components/list';
import steam from './components/steam';

const app = new Koa();

const router = combineRouters([list.router, steam.router]);
app.use(router);

app
  .use(helmet())
  // .use(errorMiddlewares.httpCodeHandler)
  // .use(errorMiddlewares.errorHandler)
  .use(middlewares.transactionIdHandler)
  .use(bodyParser({
    enableTypes: ['form', 'urlencoded', 'json'],
  }));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('info', `Server started on ${PORT}`));
