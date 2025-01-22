'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { UpdateUserData, UpdateUserSchema } from '@/types/schema/updata-user-data-schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  profile: string | null;
  phone: string;
  email: string;
  verified: boolean;
  balance: number;
  resetPasswordToken: string | null;
  resetPasswordExpires: string | null;
}

export default function UpdateProfileForm({ userData }: { userData: User }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserData>({
    resolver: zodResolver(UpdateUserSchema),
  });

  function onSubmit(values: FieldValues) {
    console.log(values);
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
