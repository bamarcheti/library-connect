import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(...routes);

const urlBD = 'mongodb://localhost:27017/node-crud-solid';
mongoose
  .connect(urlBD)
  .then(() => {
    console.log('conectado ao banco');
  })
  .catch((err) => {
    console.log('erro ao conectar no banco');
  });

app.listen(3000, () => {
  console.log('app listen on port: ' + 3000);
});