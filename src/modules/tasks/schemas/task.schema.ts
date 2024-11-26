import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  isCompleted: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  dueDate: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
