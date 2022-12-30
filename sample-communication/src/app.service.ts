import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/user-created.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreation(data: CreateUserEvent) {
    console.log('handle user created - COMMUNICATION', data);
  }
}
