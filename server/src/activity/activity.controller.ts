import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Prisma } from '@prisma/client';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(@Body() createActivityDto: Prisma.ActivityCreateInput) {
    return this.activityService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: Prisma.ActivityUpdateInput) {
    return this.activityService.update(Number(id), updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityService.remove(Number(id));
  }
}
