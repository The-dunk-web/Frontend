import { z } from 'zod';

export const CreateVisaFormSchema = z.object({
  cardNumber: z
    .string()
    .min(13, 'Card number must be at least 13 digits')
    .max(19, 'Card number cannot exceed 19 digits'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date (MM/YY)'),
  cardCVV: z.string().min(3, 'CVV must be at least 3 digits').max(4, 'CVV cannot exceed 4 digits'),
  nameOnCard: z.string().min(1, 'Name on card is required'),
});

export type CreateVisaFormType = z.infer<typeof CreateVisaFormSchema>;
