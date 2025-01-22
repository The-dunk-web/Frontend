import { z } from 'zod';

export const UpdateUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required').trim(),
  lastName: z.string().min(1, 'Last name is required').trim(),
  email: z.string().email().min(1, 'Email is required').trim().toLowerCase(),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+20\d{10}$/, 'Phone number must be in this format +20')
    .trim(),
});

export type UpdateUserData = z.infer<typeof UpdateUserSchema>;
