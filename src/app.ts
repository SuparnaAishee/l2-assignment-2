import express, { Request, Response } from 'express';

import { ProductRoutes } from './modules/product/product.route';
import { OrderRoutes } from './modules/order/order.route';

const app = express();
const port = 3000;

//parser for json
app.use(express.json());

app.use("/api/products",ProductRoutes);
 app.use("/api/orders",OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
