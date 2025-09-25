import { Module } from '@nestjs/common';
import { UserFollowService } from './user-follow.service';

@Module({
    exports:[UserFollowService],
    providers:[UserFollowService]
})
export class UserFollowModule {}
