import express from 'express';
import { deleteTask, getAllTasks, getTaskById, postTask, updateTask } from '../controllers/controller';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options, swaggerSpec } from './../index';

const swaggerDocument = require('./../swagger.json')


const router = express.Router();
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));


/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/',(request,response)=>{
    response.json({message:'Hello World!'})
})
router.get('/tasks',getAllTasks);

router.get('/tasks/:id',getTaskById);

router.post('/task',postTask);

router.put('/tasks/:id',updateTask)

router.delete('/tasks/:id',deleteTask)

export default router
  