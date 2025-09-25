import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { JoinedActivitiesService } from './joined-activities/joined-activities.service';
import { UserFollowService } from './user-follow/user-follow.service';
import { CategoryService } from './category/category.service';
import { ActivityModule } from './activity/activity.module';
import { JoinedActivitiesModule } from './joined-activities/joined-activities.module';
import { UserFollowModule } from './user-follow/user-follow.module';


@Module({
  imports: [DatabaseModule, ActivityModule, UserModule, ActivityModule, JoinedActivitiesModule, UserFollowModule],
  providers: [AppService, JoinedActivitiesService, UserFollowService, CategoryService],
})
export class AppModule {}
