import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
