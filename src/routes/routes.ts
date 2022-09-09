import express from 'express';
import { getAllTasks, getTaskById, postTask, updateTask } from '../controllers/controller';

const router = express.Router();
  
router.get('/tasks',getAllTasks);

router.get('/tasks/:id',getTaskById);

router.post('/task',postTask);

router.put('/tasks/:id',updateTask)

export default router
  