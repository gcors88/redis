import { DataSource } from 'typeorm';

const extra = {
  ssl: {
    rejectUnauthorized: true,
  },
};

export const dataSourceMigrations = new DataSource({
  name: 'default',
  type: 'postgres',
  migrationsTableName: 'migrations',
  synchronize: false,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  logging: false,
  entities: [`src/infra/database/models/**/*.ts`],
  extra,
  migrations: [`src/infra/database/migrations/**/*.ts`],
  migrationsRun: true,
});
