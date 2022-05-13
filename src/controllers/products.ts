import { Request, Response } from 'express';
import getAllService from '../services/products';

export default async function getAll(req: Request, res: Response) {
  const { status, data } = await getAllService();

  res.status(status).json(data);
}
