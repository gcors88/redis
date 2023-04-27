import { DataSource } from 'typeorm';

const extra = {
  ssl: {
    rejectUnauthorized: true,
  },
};

export const dataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  migrationsTableName: 'seeds',
  synchronize: false,
  host: 'lallah.db.elephantsql.com',
  port: 5432,
  username: 'jevscsap',
  password: 'fJigvGRjgp8vXrhnh2PYwNY5W_wj9dZN',
  database: 'jevscsap',
  logging: false,
  entities: [`src/infra/database/models/**/*.ts`],
  extra,
  migrations: [`src/infra/database/seeds/**/*.ts`],
  migrationsRun: true,
});
