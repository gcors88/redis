import { injectable } from 'inversify';
import { Controller, Get } from 'routing-controllers';

@Controller('/')
@injectable()
export class CommonController {
  @Get()
  public async health() {
    try {
      return {
        message: 'Hello! I am here.',
        status: 'UP',
        version: '1.0.0',
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
}
