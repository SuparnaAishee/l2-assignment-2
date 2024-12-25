"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true },
    category: { type: String, required: true },
    demoUrl: { type: String },
    repoUrl: { type: [String] },
    imageUrls: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });
const Project = mongoose_1.default.model('Project', projectSchema);
exports.default = Project;
