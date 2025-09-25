import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ActivityService {
   
    constructor(private readonly databaseService: DatabaseService) {}

  create(createActivityDto: Prisma.ActivityCreateInput) {
    return this.databaseService.activity.create({
      data: createActivityDto,
      include: {Category: true}
    })
  }

  findAll() {
    return this.databaseService.activity.findMany({
      include:{
        Category:true,
        Creator:true,
        Participants:true
      }
    })
  }

  findOne(Id: number) {
    return this.databaseService.activity.findUnique({
      where: {Id},
      include: {
        Category: true,
        Creator: true,
        Participants: {include:{user:true}}
      }
    })
  }

  update(Id: number, updateActivityDto: Prisma.ActivityUpdateInput) {
    return this.databaseService.activity.update({
      where:{Id},
      data: updateActivityDto
      
    })
  }

  remove(Id: number) {
    return this.databaseService.activity.delete({
      where: {
        Id
      }
    })
  }
}
