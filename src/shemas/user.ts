import { z } from 'zod';

export const userCreatePostSchema = z.object({
  text: z.string().optional(),
  title: z.string(),
});
