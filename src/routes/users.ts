import { Router } from 'express';
import create from '../controllers/users';
import validateUsers from '../middlewares/users';

const routesUsers = Router();

routesUsers.post('/', validateUsers, create);

export default routesUsers;
