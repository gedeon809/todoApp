import express, { request } from 'express';
import ToDo from '../models/todoModel.js';
const todoRouter = express.Router();

// find all todos
todoRouter.get('/', async (req, res) => {
  const todos = await ToDo.find();
  res.send(todos);
});
// create todo
todoRouter.post('/add', async (req, res) => {
  const newToDo = new ToDo(req.body);
  try {
    const savedToDo = await newToDo.save();
    res.status(200).json(savedToDo);
  } catch (err) {
    console.log('error while adding ');
  }
});
// update todo list
todoRouter.put('/:id', async (req, res) => {
  try {
    const todosUp = await ToDo.findById(req.params.id);
    if (!todosUp) return 'to do not find';
    const updateTodo = await ToDo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateTodo);
  } catch (err) {
    console.log('error');
  }
});
// delete todo list

todoRouter.delete('/:id', async (req, res) => {
  if (req.params.id) {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      res.status(200).json('Todo has been deleted');
    } catch (err) {
      console.log('Todo not found');
    }
  }
});

export default todoRouter;
