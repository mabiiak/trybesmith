import { Router } from 'express';
import getAll from '../controllers/orders';

const routesOrders = Router();

routesOrders.get('/', getAll);

export default routesOrders;
