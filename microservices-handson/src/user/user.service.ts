import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly users: any[] = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return this.users;
  }
}
