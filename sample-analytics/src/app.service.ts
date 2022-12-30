import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/user-created.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreation(data: CreateUserEvent) {
    console.log('handle user created - COMMUNICATION', data);
    const date = new Date();
    this.analytics.push({
      username: data.username,
      timestamp: new Intl.DateTimeFormat('en-US').format(date),
    });
  }
}
