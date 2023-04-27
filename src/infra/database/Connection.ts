import { injectable } from 'inversify';
import { DataSource, EntityTarget, Repository } from 'typeorm';

import { dataSourceMigrations } from './ormconfig';

@injectable()
export class Database {
  public async createConnection(): Promise<DataSource> {
    return dataSourceMigrations.initialize();
  }

  public async closeConnection(): Promise<void> {
    return dataSourceMigrations.destroy();
  }

  public getRepository(entity: EntityTarget<any>): Repository<any> {
    return dataSourceMigrations.getRepository(entity);
  }
}
