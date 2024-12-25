import express from 'express';
import { ProjectControllers } from './Project.controller';


const router = express.Router();
//creating routes
router.post('/', ProjectControllers.createProject);

router.get('/', ProjectControllers.getAllProjects);

router.get('/:id', ProjectControllers.getProjectById);
export const ProjectRoutes = router;
