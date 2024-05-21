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


const deleteProductFromDB =async(id:string)=>{
    const result = await Product.deleteOne({ _id: id });
    return result;
};


const getSearchTermProductFromDB = async (searchTerm:string) => {
  try {
   
    const regex = new RegExp(searchTerm, 'i');
    const result = await Product.find({
      $or: [{ tags: { $in: [regex] } }, { name: regex }, { category: regex }],
    }).exec();
    return result;
  } catch (err) {
   console.error('Error seacrhing product:', err);
    throw err;
   
  };
};




export const ProductServices = {
  createProductFromDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductToDB,
  deleteProductFromDB,
  getSearchTermProductFromDB,
};