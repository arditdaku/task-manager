import { model, Schema, Model, Document, Types } from 'mongoose';

export interface TaskInterface extends Document {
  title: string;
  listId: string;
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
  },
  _listId: {
    type: Types.ObjectId,
    required: true,
  },
});

export const Task: Model<TaskInterface> = model('List', TaskSchema);
