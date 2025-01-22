import Link from 'next/link';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export default function ChangePasswordForm() {
  return (
    <form className="mt-10 flex flex-col gap-5">
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
        />
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
        />
      </div>

      <Button
        variant="ourButton"
        className="h-12 w-[150px] self-end"
      >
        Change
      </Button>
    </form>
  );
}
