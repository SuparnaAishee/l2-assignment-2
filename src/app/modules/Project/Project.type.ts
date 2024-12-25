export interface TProject {
  id?: string; // Optional because it will be generated by MongoDB
  title?: string;
  description?: string;
  techStack?: string[]; // Array of strings for technologies used
  category?: string; // Category of the project (e.g., "Web Development", "App Development")
  demoUrl?: string; // Optional because not all projects might have a demo
  repoUrl?: string[]; // Optional because not all projects might have a repository link
  imageUrls?: string[]; // Array of strings for multiple image URLs
  createdAt?: Date; // Optional because it's auto-generated by Mongoose
  updatedAt?: Date; // Optional because it's auto-generated by Mongoose
}
