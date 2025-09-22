import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  imports: [DatabaseModule]
})
export class ActivitiesModule {}
