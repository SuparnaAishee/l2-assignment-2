import Project from "./Project.model";
import { TProject } from "./Project.type";


// Creating project services
const createProjectInDB = async (projectData:TProject) => {
  const result = await Project.create(projectData);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleProjectFromDB = async (id:any) => {
  const result = await Project.findOne({ _id: id });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateProjectInDB = async (projectId:any, projectData:TProject) => {
  try {
    const updateResult = await Project.findOneAndUpdate(
      { _id: projectId },
      { $set: projectData },
      { new: true, runValidators: true }, // Returns updated document and validates against schema
    );
    return updateResult;
  } catch (err) {
    console.error('Error updating project in DB:', err);
    throw err;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteProjectFromDB = async (id:any) => {
  const result = await Project.deleteOne({ _id: id });
  return result;
};

const getAllProjectsFromDB = async () => {
  try {
    return await Project.find({});
  } catch (error) {
    throw new Error('Error fetching all projects from database');
  }
};

export const ProjectServices = {
  createProjectInDB,
  getSingleProjectFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
  getAllProjectsFromDB,
};
