import express, { Request, Response } from 'express'

import { ProductControllers } from './product.controller';


const router = express.Router()
//creating routes
router.post('/', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getSingleProduct);

router.put('/:productId', ProductControllers.updateProduct);

router.delete('/:productId', ProductControllers.deleteProduct);

router.get(
  '/?searchTerm=',
  ProductControllers.getSearchTermProduct,
);


export const ProductRoutes = router;