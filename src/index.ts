import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';
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

app.use('/api',router)

app.listen(port, () => {
  /* if (err) throw err; */
  console.log(`Ready on port ${port}`);
});
export default app