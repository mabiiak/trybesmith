import express from 'express';
import routeProduct from './routes/products';

const app = express();

app.use(express.json());

app.use('/products', routeProduct);

export default app;
