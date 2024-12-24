'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SigninFormData, SigninFormSchema } from '@/types/schema/signin-form-schema';

export default function SigninForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(SigninFormSchema),
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
      <div className="mb-10 grid items-center gap-1.5 tracking-wider">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-sm hover:text-red-600"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="password"
          id="password"
          placeholder="Your Password"
          {...register('password')}
        />
        {errors?.password && <p className="text-red-600">{errors.password.message}</p>}
      </div>
      <Button
        disabled={isSubmitting}
        className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
      >
        {isSubmitting ? 'Loading...' : 'Reclaim'}
      </Button>
    </form>
  );
}
