import connection from './connection';
import { Products } from '../interfaces/index';

export async function getAllModel(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  
  const [products] = await connection.execute(query);
  
  return products as Products[];
}

export async function createModel(newProduct: object): Promise<Products[]> {
  const query = 'INSERT INTO Trybesmith.Products (name, amount, orderId);';
  
  const [products] = await connection.execute(query, [newProduct]);
  
  return products as Products[];
}
