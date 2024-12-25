
import { Request, Response } from 'express';
import { projectValidationSchema } from './Project.validation';
import Project from './Project.model';
import { ProjectServices } from './Project.service';


// <--- Controller for creating a project --->
export const createProject = async (req:Request, res:Response) => {
  try {
    const projectData = req.body;

    // Validate projectData using Zod schema
    const zodProjectData = projectValidationSchema.parse(projectData);

    // Check if a project with the same title already exists
    const existingProject = await Project.findOne({
      title: zodProjectData.title,
    });
    if (existingProject) {
      return res
        .status(400)
        .json({ error: 'Project with this title already exists' });
    }

    // Create the project
    const newProject = new Project(zodProjectData);
    const createdProject = await newProject.save();

    return res.status(201).json({
      success: true,
      message: 'Project created successfully!',
      data: createdProject,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    if (error.name === 'ZodError') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = error.errors.map((err:any) => err.message).join(', ');
      return res.status(400).json({ error: errorMessage });
    }

    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// <--- Controller for retrieving all projects --->
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectServices.getAllProjectsFromDB();
    res.status(200).json({
      success: true,
      data: projects,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// <--- Controller for retrieving a project by ID --->
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await ProjectServices.getSingleProjectFromDB(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// <--- Controller for updating a project --->
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate updateData using Zod schema
    const zodUpdateData = projectValidationSchema.partial().parse(updateData);

    const updatedProject = await ProjectServices.updateProjectInDB(
      id,
      zodUpdateData,
    );

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Project updated successfully!',
      data: updatedProject,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ZodError') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = error.errors.map((err:any) => err.message).join(', ');
      return res.status(400).json({ error: errorMessage });
    }

    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// <--- Controller for deleting a project --->
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedProject = await ProjectServices.deleteProjectFromDB(id);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully!',
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

export const ProjectControllers={createProject,getAllProjects,deleteProject,updateProject,getProjectById}
