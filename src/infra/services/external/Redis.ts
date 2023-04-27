import { injectable } from 'inversify';
import IORedis from 'ioredis';

@injectable()
export class RedisService {
  private redis: IORedis;

  constructor() {
    this.initializeService();
  }

  public async setValueByKey(key: string, payload: any) {
    return this.redis.set(key, JSON.stringify(payload));
  }

  public async getValueByKey(key: string) {
    return this.redis.get(key);
  }

  public async deleteByKey(key: string) {
    return this.redis.del(key);
  }

  private initializeService() {
    this.redis = new IORedis({
      port: 6379,
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
    });
  }
}
