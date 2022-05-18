import { Router } from 'express';
import { getAll, create } from '../controllers/products';
import validateProduct from '../middlewares/products';

const routesProduct = Router();

routesProduct.get('/', getAll);

routesProduct.post('/', validateProduct, create);

export default routesProduct;
