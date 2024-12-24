import { z } from 'zod';

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Not be empty' })
      .min(5, { message: 'Be at least 5 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password must be match',
    path: ['confirmPassword'],
  });

export type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;
