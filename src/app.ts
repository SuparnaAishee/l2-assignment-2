import express, { Request, Response } from 'express';

import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
import {  notFoundHandler } from './app/middlewares/handle.error';

const app = express();
const port = 3000;

//parser for json
app.use(express.json());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//from middleware 
app.use(notFoundHandler);

export default app;
