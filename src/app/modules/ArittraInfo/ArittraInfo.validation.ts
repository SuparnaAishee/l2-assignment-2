import { z } from 'zod';

export const arittraValidationSchema = z.object({
  name: z.string(),
  bio: z.string(),
  resume: z.string(),
  services: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      icon:z.string(),
    }),
  ),
  experiences: z.array(
    z.object({
      id: z.string(),
      position: z.string(),
      companyName: z.string(),
      year: z.string(),
    }),
  ),
  education: z.array(
    z.object({
      id: z.string(),
      degree: z.string(),
      institution: z.string(),
      year: z.string(),
    }),
  ),
  skills: z.array(
    z.object({
      id: z.string(),
      skillName: z.string(),
      image: z.string(),
      percent: z.number().min(0).max(100),
    }),
  ),
});
