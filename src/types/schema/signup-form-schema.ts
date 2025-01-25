import { z } from 'zod';

export const SignupSchema = z.object({
  firstName: z.string().min(1, 'First name is required').trim(),
  lastName: z.string().min(1, 'Last name is required').trim(),
  email: z.string().email().min(1, 'Email is required').trim().toLowerCase(),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+20\d{10}$/, 'Phone number must be in this format +20')
    .trim(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
    .trim(),
  // confirmPassword: z.string().trim(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords do not match',
//   path: ['confirmPassword'],
// });

export type SignupFormData = z.infer<typeof SignupSchema>;
