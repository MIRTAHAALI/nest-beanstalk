import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Customer } from './entities/customers.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getUsers(): Promise<Customer[]> {
    return await this.appService.getUsers();
  }
}
