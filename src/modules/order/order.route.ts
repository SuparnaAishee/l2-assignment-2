import express, { Router } from "express";
import { OrderServices } from "./order.service";
import { OrderController } from "./order.controller";


const router = express.Router();

router.post('/',OrderController.createOrder);

router.get('/',OrderController.getAllOrder);

router.get('/',OrderController.)


export const OrderRoutes = router;