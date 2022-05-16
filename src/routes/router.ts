import { Router } from 'express';
import getAll from '../controllers/products';

const routes = Router();

routes.get('/products', getAll);

export default routes;
