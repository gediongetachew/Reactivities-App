import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JoinedActivitiesModule } from 'src/joined-activities/joined-activities.module';
import { UserFollowModule } from 'src/user-follow/user-follow.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[JoinedActivitiesModule,UserFollowModule,],
  exports:[UserService]
})
export class UserModule {}
