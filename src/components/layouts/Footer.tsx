import React from 'react';
import Logo from '../global/Logo';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import ActiveLink from '../global/ActiveLink';

export default function Footer() {
  return (
    <footer className="bg-footer-pattern bg-cover bg-center">
      <div className="container mx-auto py-10">
        <div className="grid items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-5">
            <div>
              <Logo />
            </div>
            <div>
              &copy; {new Date().getFullYear()} <span className="text-red-600">The Dunk Web</span> |
              All Copyright reserved
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-5">
            <li>
              <ActiveLink
                className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                href="/"
              >
                Home
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                href="/products"
              >
                Products
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                href="/red-rome"
              >
                Red Rooms
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                href="/red-rome"
              >
                Services
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                href="/red-rome"
              >
                Articles
              </ActiveLink>
            </li>
          </ul>

          <div className="flex items-center">
            <Input
              className="h-12 w-[75%] rounded-none border-2 autofill:bg-transparent"
              type="email"
              id="email"
              placeholder="Your Email"
            />
            <Button className="h-12 w-[25%] rounded-none border-2 bg-stone-100 font-bold text-stone-950 hover:bg-transparent hover:text-slate-100">
              Send
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
