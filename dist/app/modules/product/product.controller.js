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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_model_1 = require("./product.model");
const product_validation_1 = require("./product.validation");
//<---controller for create product start--->
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // Validate productData using Zod schema
        const zodProductData = product_validation_1.ProductValidationSchema.parse(productData);
        // Example: Check if a product with the same name already exists in the database
        const existingProduct = yield product_model_1.Product.findOne({
            name: zodProductData.name,
        });
        if (existingProduct) {
            // Product with the same data already exists, return a response indicating it's already created
            return res.status(400).json({ error: 'Product already exists' });
        }
        // Product does not exist, proceed with sending a success response
        res
            .status(200)
            .json({ message: 'Product does not exist, proceed with creation' });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
//<---controller for create product end--->
//<---controller for get all product start--->
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
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
//<---controller for get all product end--->
//<---controller for get single product start--->
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params; // Extract productId from request parameters
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
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
//<---controller for get single product end--->
//<---controller for update product start--->
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const updateResult = yield product_service_1.ProductServices.updateProductToDB(productId, productData);
        console.log('Update result:', updateResult);
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
    }
    catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: err.message || err,
        });
    }
});
//<---controller for update product end--->
//<---controller for delete product start--->
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'product is deleted sucessfully',
            data: null,
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
//<---controller for delete product end--->
//<---controller for get product by search term--->
const getSearchTermProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.ProductServices.getSearchTermProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: "Products matching search term '${searchTerm}' fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        console.error('Error fetching products by search term:', err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: err.message || err,
        });
    }
});
//<---controller for get product by search term end--->
exports.ProductControllers = {
    createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, getSearchTermProduct,
};
