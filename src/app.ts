import express, { Request, Response } from 'express';

// import { ProductRoutes } from './app/modules/product/product.route';
// import { OrderRoutes } from './app/modules/order/order.route';
import {  notFoundHandler } from './app/middlewares/handle.error';
import { ProjectRoutes } from './app/modules/Project/Project.route';
 import cors from 'cors';
import { ArittraInfoRouters } from './app/modules/ArittraInfo/ArittraInfo.route';
const app = express();

app.use(
  cors({
    origin: '*',
  }),
);
//parser for json
app.use(express.json());

app.use('/api/projects', ProjectRoutes);
app.use('/api/arittrainfo',ArittraInfoRouters)
// app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Arittra!');
});

//from middleware 
app.use(notFoundHandler);

export default app;
