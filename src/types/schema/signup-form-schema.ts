import { z } from 'zod';

export const SignupSchema = z
  .object({
    username: z
      .string()
      .min(2, 'Username must be at least 2 characters')
      .max(25, 'Username must be at most 25 characters')
      .trim(),
    email: z.string().email().max(50, 'Email must be at most 50 characters').trim().toLowerCase(),
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
    message: 'Password must match',
    path: ['confirmPassword'],
  });

export type SignupFormData = z.infer<typeof SignupSchema>;
