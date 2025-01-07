'use client';
import React from 'react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateVisaFormSchema, CreateVisaFormType } from '@/types/schema/create-visa-form-schema';
import {
  AddCryptoWalletSchema,
  AddCryptoWalletType,
} from '@/types/schema/add-crypto-wallet-schema';

export default function AddCryptoWalletForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddCryptoWalletType>({
    resolver: zodResolver(AddCryptoWalletSchema),
  });

  function onSubmit(data: FieldValues) {
    console.log(data);
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
          {...register('walletAdress')}
        />
        {errors?.walletAdress && <p className="text-red-600">{errors.walletAdress.message}</p>}
      </div>
      <Button
        disabled={isSubmitting}
        className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
      >
        {isSubmitting ? 'Loading...' : 'Add Crypto Wallet'}
      </Button>
    </form>
  );
}
