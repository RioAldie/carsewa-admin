import { z } from 'zod';

export const signUpSchema = z.object({
  username: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const carSchema = z.object({
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number().min(1900).max(new Date().getFullYear()),
  color: z.string(),
  image: z.string().optional(),
  transmision: z.string(),
  seat: z.number().min(1).max(10),
  costPerDay: z.number().min(10).max(10000),
  location: z.string(),
  available: z.boolean(),
  createAt: z.string(),
  id: z.string(),
});
