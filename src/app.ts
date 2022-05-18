import express from 'express';
import routeProduct from './routes/products';
import handleError from './middlewares/handleError';

const app = express();

app.use(express.json());

app.use(handleError);

app.use('/products', routeProduct);

export default app;
