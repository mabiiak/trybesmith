import { Request, Response, NextFunction } from 'express';
import { Error } from '../interfaces';

function handleError(err: Error, req: Request, res: Response, _next: NextFunction) {
  const { status, message } = err;

  if (status) return res.status(status).json({ message });

  res.status(500).send('internal server error');
}

export default handleError;
