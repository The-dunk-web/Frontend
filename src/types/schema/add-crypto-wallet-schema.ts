import { z } from 'zod';

export const AddCryptoWalletSchema = z.object({
  walletAdress: z
    .string()
    .min(26, 'Address must be at least 26 characters long')
    .max(42, 'Address cannot exceed 42 characters'),
});

export type AddCryptoWalletType = z.infer<typeof AddCryptoWalletSchema>;
