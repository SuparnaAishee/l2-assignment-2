import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { Error } from "mongoose";
import { Product } from "./product.model";

type err = Error;

//<---controller for create product start--->
const createProduct = async (req: Request, res: Response) => {

    const productData = req.body
const result = await ProductServices.createProductFromDB(productData)

  res.status(200).json({
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
};
//<---controller for create product end--->

//<---controller for get all product start--->
const getAllProducts=async(req:Request,res:Response)=>{

    try{
const result = await ProductServices.getAllProductsFromDB();

res.status(200).json({
  success: true,
  message: 'Products fetched successfully!',
  data: result,
});
}catch(err){
      res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err,
      });
    }
};
//<---controller for get all product end--->


//<---controller for get single product start--->
const getSingleProduct = async (req: Request, res: Response) => {
  try {
const {productId }= req.params; // Extract productId from request parameters

 const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};
//<---controller for get single product end--->

//<---controller for update product start--->
const updateProduct = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params;
    const productData = req.body;

    const updateResult = await ProductServices.updateProductToDB(
      productId,
      productData,
    );
if (!updateResult) {
  res.status(404).json({
    success: false,
    message: 'Product not found!',
  });
  return;
}
    
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: updateResult,
    });

    

  } catch (err:any) {
    console.error('Error updating product:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err.message || err,
    });
  }
};
//<---controller for update product end--->

//<---controller for delete product start--->
const deleteProduct=async(req:Request,res:Response)=>{
try{
const{productId} =req.params;
const result = await ProductServices.deleteProductFromDB(productId);
res.status(200).json({
      success: true,
      message: 'product is deleted sucessfully',
      data: null,
    });
}catch(err){
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err,
  });
}
}


//<---controller for delete product end--->

//<---controller for get product by search term--->
const getSearchTermProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    
    const result = await ProductServices.getSearchTermProductFromDB(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products matching search term '${searchTerm}' fetched successfully!",
      data: result,
    });
  } catch (err:any) {
    console.error('Error fetching products by search term:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err.message || err,
    });
  }
};
//<---controller for get product by search term end--->


export const ProductControllers={
    createProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct,getSearchTermProduct,
}