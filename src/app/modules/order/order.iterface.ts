import mongoose, { Document } from 'mongoose';

// export type EmbeddedProduct={
//     productId:string;
//     name:string;
//     price:number;
// }

export type TOrder = {
  email: string;

  quantity: number;
  productId: string;

  price: number;
};
