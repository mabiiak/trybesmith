import { Request, Response } from 'express';
import { getAllService, createService } from '../services/products';

export async function getAll(req: Request, res: Response) {
  const { status, data } = await getAllService();

  res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const { name, amount } = req.body;

  const { status, data } = await createService(name, amount);
  
  res.status(status).json(data);
}
