// import { Request, Response, NextFunction } from 'express';
// import { Product } from '../modules/product/product.model';
// import { TProduct } from '../modules/product/product.interface';


// const manageInventory = async (
//   req: Request,
//   res: Response,
  
// ) => {
//   try {
//     const { productId, quantity } = req.body;

    
//     const product: TProduct | null = await Product.findById(productId);

//     // Check  product exists
//     if (!product) {
//       return res
//         .status(404)
//         .json({ success: false, message: 'Product not found' });
//     }

//     // Check  order quantity available
//     if (quantity > product.inventory.quantity) {
//       return res
//         .status(500)
//         .json({ success: false, message: 'Insufficient stock' });
//     }

   
//     product.inventory.quantity -= quantity;

//     product.inventory.inStock = product.inventory.quantity > 0;

    
//     await product.save();

   
//   } catch (error) {
//     console.error('Error managing inventory:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };

// export { manageInventory };
