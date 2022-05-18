import { getAllModel, createModel } from '../models/products';

export async function getAllService() {
  const data = await getAllModel();
  return { status: 200, data };
}

export async function createService(name :string, amount :string) {
  const data = await createModel(name, amount);
  return { status: 201, data };
}
