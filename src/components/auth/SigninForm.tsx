'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SigninFormData, SigninFormSchema } from '@/types/schema/signin-form-schema';
import { login } from '@/utils/api';
import useAuthStore from '@/middleware/authMiddleware';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DoorImg from '@/assets/door.jpg';

export default function SigninForm() {
  const setAuth = useAuthStore((state) => state.login);
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
        if (response.user.profile) router.push('/');
        else router.push('/profile');
      }, 2000);
    } catch (error) {
      setErrorMessage(`Invalid Email or Password ${(error as Error).message}`);
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
          <div className="max-w-[400px] bg-stone-900 text-center">
            <Image
              src={DoorImg}
              alt="Danger Smile"
              width={500}
              height={500}
              className="w-full"
            />
            <h2 className="mt-4 px-8 text-2xl font-bold text-red-600">Welcome idiot</h2>
            <p className="mt-2 px-8 pb-5 text-stone-100">We own you now!</p>
          </div>
        </div>
      )}
    </>
  );
}
