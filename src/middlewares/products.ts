import { Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import Joi from 'joi';

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = productSchema.validate(req.body);

  if (error) {
    const { message } = error;
    const status = StatusCodes[
      message.includes('required') ? 'BAD_REQUEST' : 'UNPROCESSABLE_ENTITY'
    ];

    return res.status(status).json({ message });
  }

  next();
} 
