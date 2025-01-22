'use client';
import Link from 'next/link';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePassowrdSchema, ChangePasswordData } from '@/types/schema/change-password-schema';
import { toast } from '@/hooks/use-toast';

export default function ChangePasswordForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ChangePasswordData>({
    resolver: zodResolver(ChangePassowrdSchema),
  });

  async function onSubmit(values: FieldValues) {
    console.log(values);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        credentials: 'include',
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Error: ${data.message}`);
      }

      toast({
        className: 'border-green-500 bg-green-500 text-slate-100',
        title: 'Success',
        description: data.message,
      });
      reset();
    } catch (err: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: (err as Error).message,
      });
    }
  }

  return (
    <form
      className="mt-10 flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid items-center gap-1.5 tracking-wider">
        <Label
          htmlFor="oldPassword"
          className="text-md font-bold text-red-600"
        >
          Old Password
        </Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="password"
          id="oldPassword"
          placeholder="Old Password"
          {...register('oldPassword')}
        />
        {errors?.oldPassword && (
          <p className="text-red-600">{errors.oldPassword.message as string}</p>
        )}
      </div>
      <div className="grid items-center gap-1.5 tracking-wider">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="newPassword"
            className="text-md font-bold text-red-600"
          >
            New Password
          </Label>
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
          id="newPassword"
          placeholder="New Password"
          {...register('newPassword')}
        />
        {errors?.newPassword && (
          <p className="text-red-600">{errors.newPassword.message as string}</p>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        variant="ourButton"
        className="h-12 w-[150px] self-end"
      >
        {isSubmitting ? 'Changing...' : 'Change'}
      </Button>
    </form>
  );
}
