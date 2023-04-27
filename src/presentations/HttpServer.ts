import 'reflect-metadata';
import express from 'express';
import { injectable } from 'inversify';
import { useExpressServer, useContainer } from 'routing-controllers';

import { container } from '../config/container';
import { AbstractServer } from '../AbstractServer';
import { UserController } from './controllers/users/UserController';
import { CommonController } from '../presentations/controllers/CommonController';

@injectable()
export class HttpServer implements AbstractServer {
  public start() {
    return new Promise((resolve) => {
      const portApp = process.env.PORT || 3001;
      resolve(this.createServer().listen(portApp));
    });
  }

  public createServer() {
    useContainer(container);
    const app = express();

    app.use(express.json());

    return useExpressServer(app, {
      routePrefix: '',
      cors: true,
      defaultErrorHandler: false,
      controllers: [CommonController, UserController],
      validation: true,
    });
  }
}
