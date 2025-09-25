import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService){}

  create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
    })
  }

  findAll() {
    return this.databaseService.user.findMany()
  }

  findOne(Id: number) {
    return this.databaseService.user.findUnique({
      where: {Id},
      include: {
        Activities: true,
        JoinedActivities: {include:{activity:true}},
        Followers:{include:{follower:true}},
        Following:{include:{following:true}}
      }
    })
  }

  update(Id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where:{Id},
      data: updateUserDto,
   
    })
  }

  remove(Id: number) {
    return this.databaseService.user.delete({
      where:{Id}
    
    })
  }
}
