'use client';
import React from 'react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  AddCryptoWalletSchema,
  AddCryptoWalletType,
} from '@/types/schema/add-crypto-wallet-schema';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function AddCryptoWalletForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddCryptoWalletType>({
    resolver: zodResolver(AddCryptoWalletSchema),
  });
  const router = useRouter();

  async function onSubmit(formData: FieldValues) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/connect-crypto-wallet`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        }
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`${data.message}`);
      }

      toast({
        className: 'border-green-500 bg-green-500 text-slate-100',
        title: 'Success',
        description: data.message,
      });
      router.back();
    } catch (err: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: (err as Error).message,
      });
    }
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="walletAdress">Wallet Adress</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="text"
          id="walletAdress"
          placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
          {...register('walletAddress')}
        />
        {errors?.walletAddress && <p className="text-red-600">{errors.walletAddress.message}</p>}
      </div>
      <Button
        disabled={isSubmitting}
        className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
      >
        {isSubmitting ? 'Loading...' : 'Add Crypto'}
      </Button>
    </form>
  );
}
