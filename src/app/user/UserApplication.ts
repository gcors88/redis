import { inject, injectable } from 'inversify';

import { RedisService } from '../../infra/services/external/Redis';
import { UserRepository } from '../../infra/database/repository/UserRepository';

@injectable()
export class UserApplication {
  private userRedisKey = 'users:all';

  constructor(
    @inject(RedisService)
    private readonly redisService: RedisService,
    @inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async findAll() {
    const usersCache = await this.redisService.getValueByKey(this.userRedisKey);

    if (usersCache) {
      return JSON.parse(usersCache);
    }

    const users = await this.userRepository.findAll();
    await this.redisService.setValueByKey(this.userRedisKey, users);

    return users;
  }

  public async clearCache() {
    return this.redisService.deleteByKey(this.userRedisKey);
  }
}
