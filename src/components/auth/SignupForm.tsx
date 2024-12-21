import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function page() {
  return (
    <form>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="username">Username</Label>
        <Input
          className="h-12 rounded-none border-2"
          type="text"
          id="username"
          placeholder="Your Username"
        />
      </div>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="email">Email</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="email"
          id="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-10 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="password">Password</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="password"
          id="password"
          placeholder="Your Password"
        />
      </div>
      <Button className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950">
        Join now
      </Button>
    </form>
  );
}
