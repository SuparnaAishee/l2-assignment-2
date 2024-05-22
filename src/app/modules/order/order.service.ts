import { Console } from "console";
import { Product } from "../product/product.model";

import { Order } from "./order.model";



type OrderData ={
  email: string;
  productId: string;
  quantity: number;
  price:number;
}


 const createOrderFromDB = async(orderData:OrderData)=>{
    try{
const {email,productId,quantity}=orderData

const product = await Product.findById(productId);
if (!product) {
      throw new Error('Product not found');
    }

  const order = await Order.create({
    email,
    
      productId: product._id.toString(),

      name: product.name,
      price: product.price,
    
    quantity,
  });
return order;


    }catch(err:any){
throw new Error ('Error in creating order ')
    }
};

 export const OrderListServices = {
  getAllOrders: async () => {
    try {
      return await Order.find({});
    } catch (error) {
      throw new Error('Error fetching all orders from database');
    }
  },

  getOrdersByEmail: async (email: string) => {
    try {
      return await Order.find({ email });
    } catch (error) {
      throw new Error('Error fetching orders from database');
    }
  },
};

export const OrderServices={
  createOrderFromDB,
}