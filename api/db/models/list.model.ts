import { model, Schema, Model, Document } from 'mongoose';
import { TaskInterface } from './task.model';

export interface ListInterface extends Document {
  title: string;
  tasks: TaskInterface[];
}

const ListSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
  },
});

export const List: Model<ListInterface> = model('List', ListSchema);
