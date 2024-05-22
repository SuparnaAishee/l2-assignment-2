import { Request, Response } from 'express';
import { OrderServices, getOrdersByEmail } from './order.service';

import {z} from 'zod';
import OrderValidateSchema from './order.validation';
//<---create controller for ordering product start--->
export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodOrderData = OrderValidateSchema.parse(orderData)
    const order = await OrderServices.createOrderFromDB(zodOrderData)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: order,

    });
    
  } catch (err: any) {
     res.status(500).json({
       sucess: false,
       message: err.message || 'something went wrong',
       error: err,
     });
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

//<---creating controller order for get order by email start--->

export const getOrdersByUserEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;// Extract email from query params

    if (!email || typeof email !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Email parameter is required and must be a string',
      });
    }

    const orders = await getOrdersByEmail(email); // Pass email to service function

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email',
      data:orders.map(order => ({
                email: order.email,
                productId: order.productId,
                price: order.price,
                quantity: order.quantity,
            })),
    });
  } catch (err:any) {
    console.error('Error fetching orders:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err.message,
    });
  }
};


//<---creating controller order for get order by email end--->




export const OrderController = {
    createOrder,getAllOrder,getOrdersByUserEmail
}
