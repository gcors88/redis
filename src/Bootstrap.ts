import { inject, injectable, LazyServiceIdentifer } from 'inversify';

import { Database } from './infra/database/Connection';
import { HttpServer } from './presentations/HttpServer';

@injectable()
export class Bootstrap {
  constructor(
    @inject(new LazyServiceIdentifer(() => HttpServer))
    private readonly httpServer: HttpServer,
    @inject(Database)
    private readonly database: Database,
  ) {}

  public async start(): Promise<void> {
    await this.database.createConnection();
    await this.httpServer.start();
    console.log(`App running on port ${process.env.PORT}`);
  }
}
