import express from 'express';
import ToDo from '../models/todoModel.js';
const seedRouter = express.Router();

seedRouter.post('/', async (req, res) => {
  //await ToDo.remove({});
  const createdToDo = new ToDo({ ...req.body });
  try {
    const saveTodo = await createdToDo.save();
    res.status(200).send(saveTodo);
  } catch (err) {
    throw err;
  }
});

export default seedRouter;
