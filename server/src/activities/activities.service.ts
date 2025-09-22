import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ActivitiesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createActivityDto: Prisma.ActivityCreateInput) {
    return this.databaseService.activity.create({
      data: createActivityDto,
      include: { Category: true },
    });
  }

  async findAll() {
    return this.databaseService.activity.findMany();
  }
  async findAllCategories() {
    return this.databaseService.category.findMany();
  }
  async findOne(id: number) {
    return this.databaseService.activity.findUnique({
      where: {
        Id: id,
      },
    });
  }

  async update(id: number, updateActivityDto: Prisma.ActivityUpdateInput) {
    return this.databaseService.activity.update({
      where: { Id: id },
      data: updateActivityDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.activity.delete({
      where: { Id: id },
    });
  }
  async removeCategory(id:number){
    return this.databaseService.category.delete({
      where:{Id:id}
    })
  }
}
