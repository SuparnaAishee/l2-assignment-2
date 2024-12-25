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
exports.ProjectServices = void 0;
const Project_model_1 = __importDefault(require("./Project.model"));
// Creating project services
const createProjectInDB = (projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Project_model_1.default.create(projectData);
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Project_model_1.default.findOne({ _id: id });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateProjectInDB = (projectId, projectData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateResult = yield Project_model_1.default.findOneAndUpdate({ _id: projectId }, { $set: projectData }, { new: true, runValidators: true });
        return updateResult;
    }
    catch (err) {
        console.error('Error updating project in DB:', err);
        throw err;
    }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Project_model_1.default.deleteOne({ _id: id });
    return result;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Project_model_1.default.find({});
    }
    catch (error) {
        throw new Error('Error fetching all projects from database');
    }
});
exports.ProjectServices = {
    createProjectInDB,
    getSingleProjectFromDB,
    updateProjectInDB,
    deleteProjectFromDB,
    getAllProjectsFromDB,
};
