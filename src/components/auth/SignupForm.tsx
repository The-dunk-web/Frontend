'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupFormData, SignupSchema } from '@/types/schema/signup-form-schema';
import { useRouter } from 'next/navigation';
import { signup } from '@/types/auth-schema';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
  });

  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(data: FieldValues) {
    try {
      const response = await signup({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });

      reset();
      setShowSuccessModal(true);
    } catch (error) {
      setErrorMessage('Something went wrong. try again.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000); // Clear error message after 2 seconds
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push('/sign-in');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 grid items-center gap-1.5 tracking-wider">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            className="h-12 rounded-none border-2"
            type="text"
            id="firstName"
            placeholder="Your First Name"
            {...register('firstName')}
          />
          {errors?.firstName && (
            <p className="text-red-600">{errors.firstName.message as string}</p>
          )}
        </div>

        <div className="mb-5 grid items-center gap-1.5 tracking-wider">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            className="h-12 rounded-none border-2"
            type="text"
            id="lastName"
            placeholder="Your Last Name"
            {...register('lastName')}
          />
          {errors?.lastName && <p className="text-red-600">{errors.lastName.message as string}</p>}
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
          <Label htmlFor="phone">Phone</Label>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="text"
            id="phone"
            placeholder="Your Phone Number"
            {...register('phone')}
          />
          {errors?.phone && <p className="text-red-600">{errors.phone.message as string}</p>}
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
          {isSubmitting ? 'Loading...' : 'Join now'}
        </Button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="flex h-full w-full items-center justify-center bg-cover bg-center">
            <div className="bg-signup-message-pattern flicker rounded-lg border-2 border-stone-700 bg-black bg-opacity-70 p-8 text-center">
              <p className="glitch mb-6 text-lg text-stone-300">
                You are now a member of The Dunk Web. The gateway to the void awaits. Will you
                cross?
              </p>
              <Button
                onClick={handleCloseModal}
                className="h-12 w-32 rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
              >
                Enter
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
