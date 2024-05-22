import express, { Router,Request,Response } from "express";
import { OrderServices,  } from "./order.service";
import { OrderController, } from "./order.controller";


const router = express.Router();

router.post('/',OrderController.createOrder);

 router.get('/', OrderController.getOrders);


  




export const OrderRoutes = router;