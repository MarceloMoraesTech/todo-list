import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';
import swaggerJSDoc from 'swagger-jsdoc';

export let options = {
  swaggerDefinition:{
      info: {
          title: 'todo-list',
          version: '1.0.0',
          servers: ['http://localhost:5000']
      }
  },
  apis: ['index.js', './routes/*ts']
  ,

};

export const swaggerSpec = swaggerJSDoc(options);


//export const test = 'test'

const port = 5000;
//export const app = express();
const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const cors = require('cors');

app.use(cors());
app.use('/api',router)

app.listen(port, () => {
  /* if (err) throw err; */
  console.log(`Ready on port ${port}`);
});
export default app