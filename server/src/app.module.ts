import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ActivitiesModule } from './activities/activities.module';
import { UserModule } from './user/user.module';
import { JoinedActivitiesService } from './joined-activities/joined-activities.service';
import { UserFollowService } from './user-follow/user-follow.service';
import { CategoryService } from './category/category.service';
import { ActivityModule } from './activity/activity.module';


@Module({
  imports: [DatabaseModule, ActivitiesModule, UserModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService, JoinedActivitiesService, UserFollowService, CategoryService],
})
export class AppModule {}
