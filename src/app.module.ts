import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { SubtasksModule } from './subtasks/subtasks.module';
import { CategoriesModule } from './categories/categories.module';
import { TaskCategoryModule } from './task-category/task-category.module';

@Module({
  imports: [UsersModule, TasksModule, SubtasksModule, CategoriesModule, TaskCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
