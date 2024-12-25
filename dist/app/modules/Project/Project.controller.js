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
exports.ProjectControllers = exports.deleteProject = exports.updateProject = exports.getProjectById = exports.getAllProjects = exports.createProject = void 0;
const Project_validation_1 = require("./Project.validation");
const Project_model_1 = __importDefault(require("./Project.model"));
const Project_service_1 = require("./Project.service");
// <--- Controller for creating a project --->
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectData = req.body;
        // Validate projectData using Zod schema
        const zodProjectData = Project_validation_1.projectValidationSchema.parse(projectData);
        // Check if a project with the same title already exists
        const existingProject = yield Project_model_1.default.findOne({
            title: zodProjectData.title,
        });
        if (existingProject) {
            return res
                .status(400)
                .json({ error: 'Project with this title already exists' });
        }
        // Create the project
        const newProject = new Project_model_1.default(zodProjectData);
        const createdProject = yield newProject.save();
        return res.status(201).json({
            success: true,
            message: 'Project created successfully!',
            data: createdProject,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.name === 'ZodError') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errorMessage = error.errors.map((err) => err.message).join(', ');
            return res.status(400).json({ error: errorMessage });
        }
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
});
exports.createProject = createProject;
// <--- Controller for retrieving all projects --->
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_service_1.ProjectServices.getAllProjectsFromDB();
        res.status(200).json({
            success: true,
            data: projects,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
});
exports.getAllProjects = getAllProjects;
// <--- Controller for retrieving a project by ID --->
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const project = yield Project_service_1.ProjectServices.getSingleProjectFromDB(id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json({
            success: true,
            data: project,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
});
exports.getProjectById = getProjectById;
// <--- Controller for updating a project --->
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        // Validate updateData using Zod schema
        const zodUpdateData = Project_validation_1.projectValidationSchema.partial().parse(updateData);
        const updatedProject = yield Project_service_1.ProjectServices.updateProjectInDB(id, zodUpdateData);
        if (!updatedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Project updated successfully!',
            data: updatedProject,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.name === 'ZodError') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errorMessage = error.errors.map((err) => err.message).join(', ');
            return res.status(400).json({ error: errorMessage });
        }
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
});
exports.updateProject = updateProject;
// <--- Controller for deleting a project --->
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedProject = yield Project_service_1.ProjectServices.deleteProjectFromDB(id);
        if (!deletedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Project deleted successfully!',
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
});
exports.deleteProject = deleteProject;
exports.ProjectControllers = { createProject: exports.createProject, getAllProjects: exports.getAllProjects, deleteProject: exports.deleteProject, updateProject: exports.updateProject, getProjectById: exports.getProjectById };
