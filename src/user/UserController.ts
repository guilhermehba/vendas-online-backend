import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';


@Controller('user')
export class UserController {
  
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUser:CreateUserDto) {
    return this.userService.createUser(createUser)
  }
  @Get()
  async getAllUsers():Promise<UserEntity[]> {
   return this.userService.getAllUser()
  }
}
