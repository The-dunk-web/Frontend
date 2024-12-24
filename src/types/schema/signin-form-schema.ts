import z from 'zod';

export const SigninFormSchema = z.object({
  email: z.string().email().min(1, 'Must not be empty').trim(),
  password: z.string().min(1, 'Must not be empty').trim(),
});

export type SigninFormData = z.infer<typeof SigninFormSchema>;
