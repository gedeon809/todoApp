import mongoose from 'mongoose';
//create table into db
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true, // for date
  }
);

const ToDo = mongoose.model('ToDo', todoSchema);
export default ToDo;
