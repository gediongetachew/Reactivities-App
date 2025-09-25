import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoryService {
  constructor(private readonly dataBaseService: DatabaseService) {}

  async createCategory(data: Prisma.CategoryCreateInput) {
    return this.dataBaseService.category.create({ data });
  }

  async getAllCategories() {
    return this.dataBaseService.category.findMany({
      include: { Activities: true },
    });
  }

  async getCategoryById(id: number) {
    return this.dataBaseService.category.findUnique({
      where: { Id: id },
      include: { Activities: true },
    });
  }
}
