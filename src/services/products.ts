import { getAllModel, createModel } from '../models/products';

export async function getAllProductsService() {
  const products = await getAllModel();
  return { status: 200, products };
}

export async function createService(name :string, amount :string) {
  const data = await createModel(name, amount);
  return { status: 201, data };
}
