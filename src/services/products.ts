import { getAllModel } from '../models/products';

export default async function getAllService() {
  const data = await getAllModel();
  return { status: 200, data };
}
