import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ResetPasswordForm() {
  return (
    <form>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="password">Password</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="password"
          id="password"
          placeholder="Your Password"
        />
      </div>
      <div className="mb-10 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="rePassword">Re Password</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="rePassword"
          id="password"
          placeholder="Your Password"
        />
      </div>
      <Button className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950">
        Reset Password
      </Button>
    </form>
  );
}
