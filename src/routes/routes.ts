import express from 'express';
import { deleteTask, getAllTasks, getTaskById, postTask, updateTask } from '../controllers/controller';

const router = express.Router();
  
router.get('/tasks',getAllTasks);

router.get('/tasks/:id',getTaskById);

router.post('/task',postTask);

router.put('/tasks/:id',updateTask)

router.delete('/tasks/:id',deleteTask)

export default router
  