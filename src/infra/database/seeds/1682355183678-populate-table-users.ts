import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserModel } from '../models/Users';
import { faker } from '@faker-js/faker';

export class PopulateTableUsers1682355183678 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i <= 1000; i++) {
      await queryRunner.connection.getRepository(UserModel).save({
        name: faker.name.fullName(),
        email: faker.internet.email(),
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(UserModel).delete({});
  }
}
