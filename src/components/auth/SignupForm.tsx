'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema } from '@/types/schema/signup-form-schema';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  async function onSubmit(data: FieldValues) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="username">Username</Label>
        <Input
          className="h-12 rounded-none border-2"
          type="text"
          id="username"
          placeholder="Your Username"
          {...register('username')}
        />
        {errors?.username && <p className="text-red-600">{errors.username.message as string}</p>}
      </div>

      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="email">Email</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="email"
          id="email"
          placeholder="Your Email"
          {...register('email')}
        />
        {errors?.email && <p className="text-red-600">{errors.email.message as string}</p>}
      </div>

      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="password">Password</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="password"
          id="password"
          placeholder="Your Password"
          {...register('password')}
        />
        {errors?.password && <p className="text-red-600">{errors.password.message as string}</p>}
      </div>

      <div className="mb-10 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="password"
          id="confirmPassword"
          placeholder="Cofirm Password"
          {...register('confirmPassword')}
        />
        {errors?.confirmPassword && (
          <p className="text-red-600">{errors.confirmPassword.message as string}</p>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
      >
        {isSubmitting ? 'Loading...' : 'Join now'}
      </Button>
    </form>
  );
}
