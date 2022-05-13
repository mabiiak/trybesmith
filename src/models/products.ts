import connection from './connection';
import { Products } from '../interfaces/index';

export default async function getAllModel(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  
  const [products] = await connection.execute(query);
  
  return products as Products[];
}
