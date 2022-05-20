import { getAllOrders } from '../models/orders';

export default async function getAllOrdersService() {
  const data = await getAllOrders();
  return { status: 200, data };
}
