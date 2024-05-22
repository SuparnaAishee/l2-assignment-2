import express, { Router } from "express";
import { OrderServices } from "./order.service";
import { OrderController } from "./order.controller";


const router = express.Router();

router.post('/',OrderController.createOrder);

router.get('/',OrderController.getAllOrder);

router.get('/email?',OrderController.getOrdersByUserEmail);


export const OrderRoutes = router;