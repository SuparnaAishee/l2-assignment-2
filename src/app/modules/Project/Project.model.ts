import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true }, 
    category: { type: String, required: true }, 
    demoUrl: { type: String },
    repoUrl: { type: [String] },
    imageUrls: { type: [String], required: true }, 
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
