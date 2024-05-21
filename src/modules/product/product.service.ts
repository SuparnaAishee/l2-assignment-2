import { Document } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProductFromDB =async(productData:TProduct)=>{
const result = await Product.create(productData);

return  result;
};

const getAllProductsFromDB = async()=>{
    const result = await Product.find();
    return result;
};

const getSingleProductFromDB = async(id:string)=>{
    const result = await Product.findOne({ _id: id });
    return result;
};

const updateProductToDB = async (
  productId: string,
  productData: Partial<TProduct>,
) => {
  try {
    const updateResult = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: productData },
      { new: true, runValidators: true },
    );

    return updateResult;
  } catch (err) {
    console.error('Error updating product in DB:', err);
    throw err;
  }
};


// const getSearchTermProductFromDB = async (searchTerm: string) => {
 
//   try {
//     // Using regex for case-insensitive search in name and description
//     const query = {
//       $or: [
//         { name: { $regex: searchTerm, $options: 'i' } },
//         { description: { $regex: searchTerm, $options: 'i' } },
//       ],
//     };

//     const result = await Product.find(query);
//     return result;
//   } catch (error) {
//     console.error('Error fetching products from DB:', error);
//     throw error;
//   }
// };




export const ProductServices = {
  createProductFromDB,
  getAllProductsFromDB,getSingleProductFromDB,updateProductToDB,
};