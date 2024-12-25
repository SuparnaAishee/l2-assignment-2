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
exports.deleteArittra = exports.updateArittra = exports.getArittraById = exports.getAllArittras = exports.createArittra = void 0;
const ArittraInfo_validation_1 = require("./ArittraInfo.validation");
const ArittraInfo_services_1 = require("./ArittraInfo.services");
const createArittra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const arittraData = ArittraInfo_validation_1.arittraValidationSchema.parse(req.body);
        const newArittra = yield ArittraInfo_services_1.ArittraServices.createArittra(arittraData);
        res.status(201).json({ success: true, data: newArittra });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.name === 'ZodError') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errors = error.errors.map((err) => err.message).join(', ');
            return res.status(400).json({ error: errors });
        }
        res.status(500).json({ error: error.message });
    }
});
exports.createArittra = createArittra;
const getAllArittras = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const arittras = yield ArittraInfo_services_1.ArittraServices.getAllArittras();
        res.status(200).json({ success: true, data: arittras });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllArittras = getAllArittras;
const getArittraById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const arittra = yield ArittraInfo_services_1.ArittraServices.getSingleArittra(id);
        if (!arittra)
            return res.status(404).json({ error: 'Arittra not found' });
        res.status(200).json({ success: true, data: arittra });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getArittraById = getArittraById;
const updateArittra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = ArittraInfo_validation_1.arittraValidationSchema.partial().parse(req.body);
        const updatedArittra = yield ArittraInfo_services_1.ArittraServices.updateArittra(id, updateData);
        if (!updatedArittra)
            return res.status(404).json({ error: 'Arittra not found' });
        res.status(200).json({ success: true, data: updatedArittra });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.name === 'ZodError') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errors = error.errors.map((err) => err.message).join(', ');
            return res.status(400).json({ error: errors });
        }
        res.status(500).json({ error: error.message });
    }
});
exports.updateArittra = updateArittra;
const deleteArittra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedArittra = yield ArittraInfo_services_1.ArittraServices.deleteArittra(id);
        if (!deletedArittra)
            return res.status(404).json({ error: 'Arittra not found' });
        res.status(200).json({ success: true, message: 'Deleted successfully' });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteArittra = deleteArittra;
