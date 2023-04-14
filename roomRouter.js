import { Router } from 'express';
import { getData } from './newData.js';

const roomRouter = Router();
roomRouter.post('/', getData);
export default roomRouter;