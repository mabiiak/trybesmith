import { Router } from 'express';
import { getAll, create } from '../controllers/products';
import validateName from '../middlewares/products';

const routes = Router();

routes.get('/', getAll);

routes.post('/', validateName, create);

export default routes;
