"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arittraValidationSchema = void 0;
const zod_1 = require("zod");
exports.arittraValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    bio: zod_1.z.string(),
    resume: zod_1.z.string(),
    services: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        icon: zod_1.z.string(),
    })),
    experiences: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        position: zod_1.z.string(),
        companyName: zod_1.z.string(),
        year: zod_1.z.string(),
    })),
    education: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        degree: zod_1.z.string(),
        institution: zod_1.z.string(),
        year: zod_1.z.string(),
    })),
    skills: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        skillName: zod_1.z.string(),
        image: zod_1.z.string(),
        percent: zod_1.z.number().min(0).max(100),
    })),
});
