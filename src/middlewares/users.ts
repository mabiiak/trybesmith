import { Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import Joi from 'joi';

export default function validateUsers(req: Request, res: Response, next: NextFunction) {
  const userSchema = Joi.object({
    username: Joi.string().required().min(3),
    classe: Joi.string().required().min(3),
    level: Joi.number().required().min(1),
    password: Joi.string().required().min(8),
  });

  const { error } = userSchema.validate(req.body);

  if (error) {
    const { message } = error;
    const status = StatusCodes[
      message.includes('required') ? 'BAD_REQUEST' : 'UNPROCESSABLE_ENTITY'
    ];

    return res.status(status).json({ message });
  }

  next();
}
