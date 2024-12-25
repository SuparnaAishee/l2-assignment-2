"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Project_controller_1 = require("./Project.controller");
const router = express_1.default.Router();
//creating routes
router.post('/', Project_controller_1.ProjectControllers.createProject);
router.get('/', Project_controller_1.ProjectControllers.getAllProjects);
router.get('/:id', Project_controller_1.ProjectControllers.getProjectById);
exports.ProjectRoutes = router;
