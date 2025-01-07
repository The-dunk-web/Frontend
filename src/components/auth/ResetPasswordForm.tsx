'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetPasswordFormData, ResetPasswordSchema } from '@/types/schema/reset-password-schema';
import { resetPassword } from '@/utils/api';
import { useParams, useRouter } from 'next/navigation';

export default function ResetPasswordForm() {
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
  });
  const router = useRouter();
  const params = useParams();
  const token = params.token;
  const [showMockMessage, setShowMockMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(data: FieldValues) {
    if (!token) {
      setErrorMessage('Invalid token');
      return;
    }

    try {
      await resetPassword(token, { password: data.password });
      setShowMockMessage(true);
      reset();
      setTimeout(() => {
        router.push('/sign-in');
      }, 2000);
    } catch (error) {
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
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
          {errors?.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message as string}</p>
          )}
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
          {isSubmitting ? 'Resetting...' : 'Reset Password'}
        </Button>
      </form>
      {showMockMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="rounded-lg border-2 border-stone-700 bg-stone-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-red-600">Seriously?</h2>
            <p className="mt-4 text-stone-100">
              {`Password reset? Nailed it! 🚀\n Now go login before you forget it again. Go to login!`}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
