import { z } from 'zod';

export const ChangePassowrdSchema = z
  .object({
    oldPassword: z.string().min(1, 'Old password is required').trim(),
    newPassword: z
      .string()
      .min(1, 'new password is required')
      .min(8, 'new password must be at least 8 characters')
      .regex(/[A-Z]/, 'new password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'new password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'new password must contain at least one number')
      .regex(/[^a-zA-Z0-9]/, 'new password must contain at least one special character')
      .trim(),
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: 'Please Enter a new Password',
    path: ['newPassword'],
  });

export type ChangePasswordData = z.infer<typeof ChangePassowrdSchema>;
