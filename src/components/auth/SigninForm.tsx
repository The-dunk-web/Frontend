'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SigninFormData, SigninFormSchema } from '@/types/schema/signin-form-schema';
import { login } from '@/types/auth-schema';
import useAuthStore from '@/hooks/useAuthStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SigninForm() {
  const { login: setAuth } = useAuthStore();
  const router = useRouter();
  const [showCustomMessage, setShowCustomMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(SigninFormSchema),
  });

  async function onSubmit(data: FieldValues) {
    try {
      const response = await login({ email: data.email, password: data.password });
      setAuth(response.user);
      setShowCustomMessage(true);
      reset();
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error: unknown) {
      setErrorMessage('Something went wrong. try again.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
  }

  return (
    <>
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

        {errorMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="rounded-lg border-2 border-red-700 bg-red-900 p-6 text-center text-red-300">
              {errorMessage}
            </div>
          </div>
        )}

        <Button
          disabled={isSubmitting}
          className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
        >
          {isSubmitting ? 'Loading...' : 'Reclaim'}
        </Button>
      </form>

      {showCustomMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-stone-900 p-8 text-center">
            <Image
              src="/danger-smile.jpg"
              alt="Danger Smile"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h2 className="mt-4 text-2xl font-bold text-red-600">hahahaha thanks idiot</h2>
            <p className="mt-2 text-stone-100">Your data is public now!</p>
          </div>
        </div>
      )}
    </>
  );
}
