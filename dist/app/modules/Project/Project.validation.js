"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProject = exports.projectValidationSchema = void 0;
const zod_1 = require("zod");
exports.projectValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required').max(100, 'Title is too long'),
    description: zod_1.z.string().min(1, 'Description is required'),
    techStack: zod_1.z.array(zod_1.z.string()).min(1, 'At least one technology is required'),
    category: zod_1.z.string().min(1, 'Category is required'), // Category validation
    demoUrl: zod_1.z.string().url('Demo URL must be a valid URL').optional(),
    repoUrl: zod_1.z.array(zod_1.z.string().url('Repo URL must be a valid URL')).optional(),
    imageUrls: zod_1.z
        .array(zod_1.z.string().url())
        .min(1, 'At least one image URL is required'), // Validation for multiple images
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateProject = (data) => {
    return exports.projectValidationSchema.safeParse(data);
};
exports.validateProject = validateProject;
