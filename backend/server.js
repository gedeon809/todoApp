import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoute.js';
import todoRouter from './routes/todoRoute.js';

//create connection with db
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('first connection');
  })
  .catch((err) => {
    throw err;
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// route
app.use('/api/seed/', seedRouter);
app.use('/api/todos/', todoRouter);

// create port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
