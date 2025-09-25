import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserFollowService {
    constructor(private readonly databaseService: DatabaseService){}

    async followUser(followerId:number, followingId:number) {
        return this.databaseService.userFollow.create({
            data: {followerId,followingId} 
        })
    }

    async unfollowUser(followerId:number, followingId:number) {
        return this.databaseService.userFollow.delete({
            where: {
                followerId_followingId: {followerId,followingId}
            }
        })
    }
    
    async getFollowers(userId: number) {
        return this.databaseService.userFollow.findMany({
            where: {
                followingId: userId
            },
            include: {follower: true}
        })
    }

    async getFollowing(userId:number) {
        return this.databaseService.userFollow.findMany({
            where: {
                followerId: userId
            },
            include: {following:true}
        })
    }


}
