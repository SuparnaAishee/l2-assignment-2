import { Request, Response } from 'express';
import { OrderServices } from './order.service';

//<---create controller for ordering product start--->
export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body
    const order = await OrderServices.createOrderFromDB(orderData)
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: order,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
//<---creating controller order product end--->


//<---creating controller order for get all order start-->
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const orderResult = await OrderServices.getAllOrderFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: orderResult,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};


//<---creating controller order for get all order end-->






export const OrderController = {
    createOrder,getAllOrder
}
