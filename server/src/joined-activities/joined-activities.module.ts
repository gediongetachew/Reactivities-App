import { Module } from '@nestjs/common';
import { JoinedActivitiesService } from './joined-activities.service';

@Module({
    exports:[JoinedActivitiesService],
    providers:[JoinedActivitiesService]
})
export class JoinedActivitiesModule {}
