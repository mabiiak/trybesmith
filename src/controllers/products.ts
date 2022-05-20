import { Request, Response } from 'express';
import { getAllProductsService, createService } from '../services/products';

export async function getAll(req: Request, res: Response) {
  const { status, products } = await getAllProductsService();

  res.status(status).json(products);
}

export async function create(req: Request, res: Response) {
  const { name, amount } = req.body;

  const { status, data } = await createService(name, amount);
  
  res.status(status).json(data);
}
