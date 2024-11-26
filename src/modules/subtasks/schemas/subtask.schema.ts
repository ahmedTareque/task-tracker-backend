import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';

@Schema()
export class Subtask extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Task', required: true })
  taskId: string;

  @Prop({ default: false })
  isCompleted: boolean;
}

export const SubtaskSchema = SchemaFactory.createForClass(Subtask);
