import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from './user.service';
import { ReturnUserDto } from './dtos/returnUser.dto';


@Controller('user')
export class UserController {
  
  constructor(private userService: UserService) {}


  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser:CreateUserDto) {
    return this.userService.createUser(createUser)
  }
  @Get()
  async getAllUsers():Promise<ReturnUserDto[]> {
   return (await this.userService.getAllUser()).map(
    (userEntity) => new ReturnUserDto(userEntity),)
  }
}
