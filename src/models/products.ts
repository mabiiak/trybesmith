import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products } from '../interfaces/index';

export async function getAllModel(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  
  const [products] = await connection.execute(query);
  
  return products as Products[];
}

export async function createModel(name :string, amount :string): Promise<Products> {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  
  const [products] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  return { id: products.insertId, name, amount };
}
