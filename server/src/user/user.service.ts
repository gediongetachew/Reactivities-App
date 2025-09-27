import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService){}

 async create(createUserDto: Prisma.UserCreateInput) {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    return this.databaseService.user.create({
      data: {...createUserDto, password: hashedPassword},
    })
  }

  async findAll() {
    return this.databaseService.user.findMany()
  }

  async findOne(Id: number) {
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
  async findUnique(email: string) {
    return this.databaseService.user.findUnique({
      where: {email}
    })
  }

 async update(Id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where:{Id},
      data: updateUserDto,
   
    })
  }

 async remove(Id: number) {
    return this.databaseService.user.delete({
      where:{Id}
    
    })
  }
}
