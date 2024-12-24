import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  return (
    <form>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="email">Email</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="email"
          id="email"
          placeholder="Your Email"
        />
      </div>
      <Button className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950">
        Confirm My Identity
      </Button>
    </form>
  );
}
