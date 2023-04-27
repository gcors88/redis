import 'reflect-metadata';
import { Response } from 'express';
import { inject, injectable } from 'inversify';
import { Controller, Get, Res } from 'routing-controllers';

import { UserApplication } from '../../../app/user/UserApplication';

@Controller('/users')
@injectable()
export class UserController {
  constructor(
    @inject(UserApplication)
    private readonly userApplication: UserApplication,
  ) {}

  @Get('')
  public async findAll(@Res() res: Response) {
    try {
      const users = await this.userApplication.findAll();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  @Get('/clear-cache')
  public async clearCache(@Res() res: Response) {
    try {
      await this.userApplication.clearCache();

      return {
        message: 'Cleared cache with successfully',
      };
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}
