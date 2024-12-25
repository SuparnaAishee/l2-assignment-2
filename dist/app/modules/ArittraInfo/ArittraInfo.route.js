"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArittraInfoRouters = void 0;
const express_1 = __importDefault(require("express"));
const ArittraInfo_controller_1 = require("./ArittraInfo.controller");
const router = express_1.default.Router();
router.post('/', ArittraInfo_controller_1.createArittra);
router.get('/', ArittraInfo_controller_1.getAllArittras);
router.get('/:id', ArittraInfo_controller_1.getArittraById);
router.put('/:id', ArittraInfo_controller_1.updateArittra);
router.delete('/:id', ArittraInfo_controller_1.deleteArittra);
exports.ArittraInfoRouters = router;
