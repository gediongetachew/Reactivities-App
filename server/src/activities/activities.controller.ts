import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { Prisma } from '@prisma/client';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: Prisma.ActivityCreateInput) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }
  @Get('categories')
  findAllCategories(){
    return this.activitiesService.findAllCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: Prisma.ActivityUpdateInput) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(+id);
  }
  @Delete('categories/:id')
  removeCategory(@Param('id') id: string){
    return this.activitiesService.removeCategory(+id);
  }

}
