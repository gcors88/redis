import 'reflect-metadata';
import { Container } from 'inversify';

import { Bootstrap } from '../Bootstrap';
import { Database } from '../infra/database/Connection';
import { UserApplication } from '../app/user/UserApplication';
import { RedisService } from '../infra/services/external/Redis';
import { HttpServer } from '../presentations/HttpServer';
import { UserRepository } from '../infra/database/repository/UserRepository';
import { CommonController } from '../presentations/controllers/CommonController';
import { UserController } from '../presentations/controllers/users/UserController';

const container: Container = new Container();

container.bind(Container).toConstantValue(container);

//bootstrap
container.bind(Bootstrap).toSelf();

//app
container.bind(UserApplication).toSelf();

//infra
container.bind(Database).toSelf();
container.bind(RedisService).toSelf();
container.bind(UserRepository).toSelf();

//presentations
container.bind(HttpServer).toSelf();
container.bind(UserController).toSelf();
container.bind(CommonController).toSelf();

export { container };
