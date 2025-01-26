'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForgotPasswordFormData,
  ForgotPasswordSchema,
} from '@/types/schema/forgot-password-schema';
import { forgotPassword } from '@/utils/api';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordForm() {
  const [showMockMessage, setShowMockMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const router = useRouter();

  async function onSubmit(data: FieldValues) {
    try {
      await forgotPassword({ email: data.email });
      setShowMockMessage(true);
      reset();
    } catch (error) {
      setErrorMessage(
        `this email is not registered you are really an idiot 😕 ${(error as Error).message}`
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 4000);
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
        <Button
          disabled={isSubmitting}
          className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
        >
          Confirm My Identity
        </Button>
      </form>
      {showMockMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="rounded-lg border-2 border-stone-700 bg-stone-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-red-600">Seriously?</h2>
            <p className="mt-4 text-stone-100">
              Who forgets their password? Are you even human? 😂 Check your email for a reset link
              Idiot.
            </p>
            <Button
              onClick={() => {
                setShowMockMessage(false);
                router.push('/sign-in');
              }}
              className="mt-6 h-12 w-32 rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
            >
              {`Okay`}
            </Button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="rounded-lg border-2 border-red-700 bg-red-900 p-6 text-center text-red-300">
            {errorMessage}
          </div>
        </div>
      )}
    </>
  );
}
