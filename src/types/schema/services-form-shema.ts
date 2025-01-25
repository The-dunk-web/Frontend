import { z } from 'zod';

export const servicesSchema = z.object({
  name: z.string().min(1, 'name is required').max(50),
  description: z.string().min(1, 'Descriptioni is required').max(100),
  price: z.coerce
    .number({ required_error: 'Price is required', invalid_type_error: 'Price must be a number' })
    .min(1, 'Price must be at eleast 1 credit'),
});

export type ServicesFormType = z.infer<typeof servicesSchema>;
