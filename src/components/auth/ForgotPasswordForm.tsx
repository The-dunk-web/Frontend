'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import {
  ForgotPasswordFormData,
  ForgotPasswordSchema,
} from '@/types/schema/forgot-password-schema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  function onSubmit(data: FieldValues) {
    console.log(data);

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="email">Email</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="email"
          id="email"
          placeholder="Your Email"
          {...register('email')}
        />
        {errors?.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <Button
        disabled={isSubmitting}
        className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
      >
        Confirm My Identity
      </Button>
    </form>
  );
}
