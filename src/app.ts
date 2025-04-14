console.log('✅ app.ts: Initializing...');

import express, { Application } from 'express';
import timeZoneRouter from './routes/timezone.routes.js'; // ✅ must include .js if you're using ESM
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { errorHandler } from './middlewares/errorHandler/errorHandler.js';
import morgan from 'morgan';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setRoutes();
    this.setMiddlewares();
    this.app.use(morgan(':method :url :status :response-time ms'));
    this.setErrorHandler();
  }

  public getServer(): Application {
    return this.app;
  }

  private setErrorHandler(): void {
    this.app.use(errorHandler);
  }

  private setRoutes(): void {
    this.app.use('/api/time-zone', timeZoneRouter);
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.set('view engine', 'ejs');
    this.app.use(express.static(path.join(__dirName, '../public')));
  }
}

export default new App().getServer();
