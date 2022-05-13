import express from 'express';
import getAll from './controllers/products';

const app = express();

app.use(express.json());

app.get('/products', getAll);

export default app;
