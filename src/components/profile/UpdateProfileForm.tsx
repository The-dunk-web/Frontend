'use client';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useAuthStore from '@/middleware/authMiddleware';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { UpdateUserData, UpdateUserSchema } from '@/types/schema/updata-user-data-schema';
import { UserType } from '@/types/interfaces';

export default function UpdateProfileForm({ userData }: { userData: UserType }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserData>({
    resolver: zodResolver(UpdateUserSchema),
  });
  const { updateUser } = useAuthStore();

  async function onSubmit(values: FieldValues) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/edit-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        credentials: 'include',
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      updateUser({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      });

      toast({
        className: 'border-green-500 bg-green-500 text-slate-100',
        title: 'Success',
        description: data.message,
      });
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
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-5">
        <div className="grid w-full items-center gap-1.5 tracking-wider">
          <Label
            htmlFor="firstName"
            className="text-md font-bold text-red-600"
          >
            First Name
          </Label>
          <Input
            className="h-12 rounded-none border-2"
            type="text"
            id="firstName"
            placeholder="Your First Name"
            defaultValue={userData.firstName}
            {...register('firstName')}
          />
          {errors?.firstName && (
            <p className="text-red-600">{errors.firstName.message as string}</p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5 tracking-wider">
          <Label
            htmlFor="lastName"
            className="text-md font-bold text-red-600"
          >
            Last Name
          </Label>
          <Input
            className="h-12 rounded-none border-2"
            type="text"
            id="lastName"
            placeholder="Your Last Name"
            defaultValue={userData.lastName}
            {...register('lastName')}
          />
          {errors?.lastName && <p className="text-red-600">{errors.lastName.message as string}</p>}
        </div>
      </div>

      <div className="grid items-center gap-1.5 tracking-wider">
        <Label
          htmlFor="email"
          className="text-md font-bold text-red-600"
        >
          Email
        </Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="email"
          id="email"
          placeholder="Your Email"
          defaultValue={userData.email}
          {...register('email')}
        />
        {errors?.email && <p className="text-red-600">{errors.email.message as string}</p>}
      </div>

      <div className="grid items-center gap-1.5 tracking-wider">
        <Label
          htmlFor="phone"
          className="text-md font-bold text-red-600"
        >
          Phone
        </Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="text"
          id="phone"
          placeholder="Your Phone Number"
          defaultValue={userData.phone}
          {...register('phone')}
        />
        {errors?.phone && <p className="text-red-600">{errors.phone.message as string}</p>}
      </div>

      <Button
        disabled={isSubmitting}
        variant="ourButton"
        className="h-12 w-[150px] self-end"
      >
        {isSubmitting ? 'Updating...' : 'Update'}
      </Button>
    </form>
  );
}
