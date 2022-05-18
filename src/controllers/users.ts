import { Request, Response } from 'express';
import createService from '../services/users';
import newToken from '../helpers/jwt';

export default async function create(req:Request, res:Response) {
  await createService(req.body);

  const token = newToken(req.body);  

  res.status(201).json({ token });
}
