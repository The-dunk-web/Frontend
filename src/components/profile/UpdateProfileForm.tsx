import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

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
  return (
    <form className="flex flex-col gap-5">
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
          />
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
          />
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
        />
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
        />
      </div>

      <Button
        variant="ourButton"
        className="h-12 w-[150px] self-end"
      >
        Update
      </Button>
    </form>
  );
}
