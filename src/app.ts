import express from 'express';
import routesProduct from './routes/products';
import routesUsers from './routes/users';
import routesOrders from './routes/orders';
import handleError from './middlewares/handleError';

const app = express();

app.use(express.json());

app.use(handleError);

app.use('/products', routesProduct);

app.use('/users', routesUsers);

app.use('/orders', routesOrders);

export default app;
