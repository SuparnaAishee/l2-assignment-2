"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { ProductRoutes } from './app/modules/product/product.route';
// import { OrderRoutes } from './app/modules/order/order.route';
const handle_error_1 = require("./app/middlewares/handle.error");
const Project_route_1 = require("./app/modules/Project/Project.route");
const cors_1 = __importDefault(require("cors"));
const ArittraInfo_route_1 = require("./app/modules/ArittraInfo/ArittraInfo.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
}));
//parser for json
app.use(express_1.default.json());
app.use('/api/projects', Project_route_1.ProjectRoutes);
app.use('/api/arittrainfo', ArittraInfo_route_1.ArittraInfoRouters);
// app.use('/api/orders', OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello From Arittra!');
});
//from middleware 
app.use(handle_error_1.notFoundHandler);
exports.default = app;
