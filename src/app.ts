import express from 'express';
import routesProduct from './routes/products';
import routesUsers from './routes/users';
import handleError from './middlewares/handleError';

const app = express();

app.use(express.json());

app.use(handleError);

app.use('/products', routesProduct);

app.use('/users', routesUsers);

export default app;
