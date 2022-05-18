import createUser from '../models/users';
import { Users } from '../interfaces';

export default async function createService(newUser: Users) {  
  const { username, classe, level, password } = newUser;

  const data = await createUser(username, classe, level, password);
  return data;
}