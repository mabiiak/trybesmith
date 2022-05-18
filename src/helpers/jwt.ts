import { sign, SignOptions } from 'jsonwebtoken';
import { Users } from '../interfaces';

const secret = 'secrettoken';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default function newToken(info: Users) {
  return sign({ data: info }, secret, jwtConfig);
}
