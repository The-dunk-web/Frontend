import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  content: z.string().min(1, 'Content is required').max(10000),
});

export type ArticleFormData = z.infer<typeof articleSchema>;
