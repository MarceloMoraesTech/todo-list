import express from 'express';
import { getAllTasks } from './config/db';
import { getTaskById } from './config/db';
import bodyParser from 'body-parser';

const port = 5000;
const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (_req, res) => {
  //res.end('Hello Marcelo!');
});

app.get('/tasks',getAllTasks);

app.get('/tasks/:id',getTaskById);

app.listen(port, () => {
  /* if (err) throw err; */
  console.log(`Ready on port ${port}`);
});