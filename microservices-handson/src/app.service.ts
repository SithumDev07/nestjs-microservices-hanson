import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './user/dto/create-user.dto';
import { CreateUserEvent } from './user/events/user-created.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserDto.username),
    );
    this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(createUserDto.username),
    );
    return this.users;
  }
}
