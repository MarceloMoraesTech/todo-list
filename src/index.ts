import express from 'express';

const port = 3000;
const app = express();

app.get('/', (_req, res) => {
  res.end('Hello Marcelo!');
});

app.listen(port, () => {
  /* if (err) throw err; */
  console.log(`Ready on port ${port}`);
});