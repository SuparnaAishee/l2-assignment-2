"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//creating routes
router.post('/', product_controller_1.ProductControllers.createProduct);
router.get('/', product_controller_1.ProductControllers.getAllProducts);
router.get('/:productId', product_controller_1.ProductControllers.getSingleProduct);
router.put('/:productId', product_controller_1.ProductControllers.updateProduct);
router.delete('/:productId', product_controller_1.ProductControllers.deleteProduct);
router.get('/?searchTerm=', product_controller_1.ProductControllers.getSearchTermProduct);
exports.ProductRoutes = router;
