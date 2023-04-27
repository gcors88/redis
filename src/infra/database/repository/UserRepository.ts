import { Repository } from 'typeorm';
import { inject, injectable } from 'inversify';

import { Database } from '../Connection';
import { UserModel } from '../models/Users';

@injectable()
export class UserRepository {
  constructor(
    @inject(Database)
    private readonly database: Database,
  ) {}

  public async findAll() {
    return this.repository.find({});
  }

  private get repository(): Repository<UserModel> {
    return this.database.getRepository(UserModel);
  }
}
