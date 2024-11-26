import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';

@Schema()
export class TaskCategory extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Task', required: true })
  taskId: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  categoryId: string;
}

export const TaskCategorySchema = SchemaFactory.createForClass(TaskCategory);
