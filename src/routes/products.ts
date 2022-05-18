import { Router } from 'express';
import { getAll, create } from '../controllers/products';
import validateProduct from '../middlewares/products';

const routes = Router();

routes.get('/', getAll);

routes.post('/', validateProduct, create);

export default routes;
