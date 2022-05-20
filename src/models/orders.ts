import connection from './connection';
import { Order } from '../interfaces';

export async function getAllOrders(): Promise<Order[]> {
  const query = 'SELECT * FROM Trybesmith.Orders;';
  
  const [orders] = await connection.execute(query);
  
  return orders as Order[];
}

export async function getOrdersQuery(): Promise<Order[]> {
  const query = `
    SELECT ord.id, ord.userId, prod.id AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON ord.id = prod.orderId
  `;

  const [orders] = await connection.execute(query);
  
  return orders as Order[];
}
