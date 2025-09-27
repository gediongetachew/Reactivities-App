import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
 
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { JoinedActivitiesService } from 'src/joined-activities/joined-activities.service';
import { UserFollowService } from 'src/user-follow/user-follow.service';
import { AuthGuard } from 'src/guards/auth-guard.guard';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userFollowService: UserFollowService,
    private readonly joinedActivitiesService: JoinedActivitiesService,
  ) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }
  
 
  @Post(':id/follow-user')
  @UseGuards(AuthGuard,AuthorizationGuard)
  followUser(
    @Param('id') id: string,
    @Body('followUserId') followUserId: string,
  ) {
    return this.userFollowService.followUser(Number(id), Number(followUserId));
  }
  @Post(':id/unfollow-user')
  @UseGuards(AuthGuard,AuthorizationGuard)
  unfollowUser(
    @Param('id') id: string,
    @Body('unfollowUserId') unfollowUserId: string,
  ) {
    return this.userFollowService.unfollowUser(
      Number(id),
      Number(unfollowUserId),
    );
  }

  @Post(':id/join-activity')
  @UseGuards(AuthGuard, AuthorizationGuard)
  joinActivity(
    @Param('id') id: string,
    @Body('activityId') activityId: string,
  ) {
    return this.joinedActivitiesService.joinActivity(
      Number(id),
      Number(activityId),
    );
  }

  @Post(':id/leave-activity')
  @UseGuards(AuthGuard,AuthorizationGuard)
  leaveActivity(
    @Param('id') id: string,
    @Body('activityId') activityId: string,
  ) {
    return this.joinedActivitiesService.leaveActivity(
      Number(id),
      Number(activityId),
    );
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id/followers')
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles('admin')
  findFollowers(@Param('id') id: string) {
    return this.userFollowService.getFollowers(Number(id));
  }
  @Get(':id/following')
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles('admin')
  findFollowing(@Param('id') id: string) {
    return this.userFollowService.getFollowing(Number(id));
  }

  @Get(':id/joined-activities')
  @UseGuards(AuthGuard, AuthorizationGuard)
  @Roles('admin')
  findUserActivities(@Param('id') id: string) {
    return this.joinedActivitiesService.getUserJoinedActivities(Number(id));
  }

  @Get(':id')
  @UseGuards(AuthGuard, AuthorizationGuard)
  @Roles('admin')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  @UseGuards(AuthGuard, AuthorizationGuard)
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }
}
