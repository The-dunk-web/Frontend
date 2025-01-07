import { z } from 'zod';

export const CreateVisaFormSchema = z.object({
  cardNumber: z.string(),
  expiryDate: z.string(),
  cardCVV: z.string(),
  nameOnCard: z.string(),
});

export type CreateVisaFormType = z.infer<typeof CreateVisaFormSchema>;
