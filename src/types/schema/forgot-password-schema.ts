import { z } from 'zod';

export const ForgotPasswordSchema = z.object({
  email: z.string().email().max(50, 'Email must be at most 50 characters').trim().toLowerCase(),
});

export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordSchema>;
