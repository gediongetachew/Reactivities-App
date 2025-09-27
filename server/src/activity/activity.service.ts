import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ActivityService {
   
    constructor(private readonly databaseService: DatabaseService) {}

  async create(createActivityDto: Prisma.ActivityCreateInput) {
    return this.databaseService.activity.create({
      data: createActivityDto,
      include: {Category: true}
    })
  }

 async findAll() {
    return this.databaseService.activity.findMany({
      include:{
        Category:true,
        Creator:true,
        Participants:true
      }
    })
  }

 async findOne(Id: number) {
    return this.databaseService.activity.findUnique({
      where: {Id},
      include: {
        Category: true,
        Creator: true,
        Participants: {include:{user:true}}
      }
    })
  }

 async update(Id: number, updateActivityDto: Prisma.ActivityUpdateInput) {
    return this.databaseService.activity.update({
      where:{Id},
      data: updateActivityDto
      
    })
  }

 async remove(Id: number) {
    return this.databaseService.activity.delete({
      where: {
        Id
      }
    })
  }
}
