import { Request, Response } from 'express';
import { OrderListServices, OrderServices } from './order.service';

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

//


//const createOrder = async (req: Request, res: Response) => {
  // Your create order logic here
//};

// Controller for getting orders, either all or by email
const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;

    let orders;
    if (email) {
      orders = await OrderListServices.getOrdersByEmail(email);
    } else {
      orders = await OrderListServices.getAllOrders();
    }

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err.message,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,

};


// export const OrderController = {
//   createOrder,
//   getAllOrder,
//   getOrdersByUserEmail,
//   getOrdersByEmail,
// };
    //getOrdersByUserEmail

