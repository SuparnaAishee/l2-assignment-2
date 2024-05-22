"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = exports.createOrder = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
//<---create controller for ordering product start--->
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodOrderData = order_validation_1.default.parse(orderData);
        const order = yield order_service_1.OrderServices.createOrderFromDB(zodOrderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: order,
        });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
exports.createOrder = createOrder;
//<---creating controller order product end--->
//<---creating controller order for get all order start-->
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderResult = yield order_service_1.OrderServices.getAllOrderFromDB();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: orderResult,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: err,
        });
    }
});
//<---creating controller order for get all order end-->
//<---creating controller order for get order by email start--->
// export const getOrdersByUserEmail = async (req: Request, res: Response) => {
//   try {
//     const email = req.query.email as string | undefined;// Extract email from query params
//     if (!email || typeof email !== 'string') {
//       return res.status(400).json({
//         success: false,
//         message: 'Email parameter is required and must be a string',
//       });
//     }
//     const orders = await getOrdersByEmail(email); // Pass email to service function
//     res.status(200).json({
//       success: true,
//       message: 'Orders fetched successfully for user email',
//       data:orders.map(order => ({
//                 email: order.email,
//                 productId: order.productId,
//                 price: order.price,
//                 quantity: order.quantity,
//             })),
//     });
//   } catch (err:any) {
//     console.error('Error fetching orders:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Something went wrong!',
//       error: err.message,
//     });
//   }
// };
//<---creating controller order for get order by email end--->
exports.OrderController = {
    createOrder: exports.createOrder, getAllOrder,
};
//getOrdersByUserEmail
