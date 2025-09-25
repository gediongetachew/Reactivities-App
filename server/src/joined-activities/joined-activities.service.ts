import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class JoinedActivitiesService {
    constructor(private readonly databaseService: DatabaseService) {}

    async joinActivity(userId: number , activityId: number) {
        return this.databaseService.joinedActivities.create({
            data: {userId, activityId}
            
        })
    }

    
    async leaveActivity(userId:number, activityId: number) {
        return this.databaseService.joinedActivities.delete({
            where:{
              userId_activityId: {userId,activityId}
            }
        })
    }

    async getUserJoinedActivities(userId: number) {
        return this.databaseService.joinedActivities.findMany({
            where:{
                userId
            },
            include: {activity: true}
        })
    }
    
}
