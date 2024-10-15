import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './entities/customers.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }
}
