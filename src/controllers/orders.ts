import { Request, Response } from 'express';
import getAllOrdersService from '../services/orders';
import { getAllProductsService } from '../services/products';

export default async function getAllOrders(req: Request, res: Response) {
  const { status, data } = await getAllOrdersService();
  const { products } = await getAllProductsService();
  const result = [];

  for (let i = 0; i < data.length; i += 1) {  
    const filter = products.find((prod) => prod.orderId === data[i].id);

    if (filter !== undefined) {
      result.push({
        id: data[i].id,
        userId: data[i].userId,
        productsIds: [filter.id],
      });
    }
  }

  res.status(status).json(result);
}
