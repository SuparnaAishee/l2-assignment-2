import { z } from 'zod';

export const projectValidationSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  description: z.string().min(1, 'Description is required'),
  techStack: z.array(z.string()).min(1, 'At least one technology is required'),
  category: z.string().min(1, 'Category is required'), // Category validation
  demoUrl: z.string().url('Demo URL must be a valid URL').optional(),
  repoUrl: z.array(z.string().url('Repo URL must be a valid URL')).optional(),
  imageUrls: z
    .array(z.string().url())
    .min(1, 'At least one image URL is required'), // Validation for multiple images
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateProject = (data: any) => {
  return projectValidationSchema.safeParse(data);
};
