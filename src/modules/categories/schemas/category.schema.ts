import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
