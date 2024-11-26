import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { SubtasksModule } from './modules/subtasks/subtasks.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TaskCategoryModule } from './modules/task-category/task-category.module';

@Module({
  imports: [UsersModule, TasksModule, SubtasksModule, CategoriesModule, TaskCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
