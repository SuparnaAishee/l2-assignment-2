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


const getAllOrderFromDB=async()=>{
  {
    const orderResult = await Order.find();
    return orderResult;
  }
}

export const OrderServices = {
    createOrderFromDB,getAllOrderFromDB
}