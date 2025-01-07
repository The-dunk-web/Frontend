import Link from 'next/link';
import React from 'react';
import UserMenu from '@/components/landing/UserMenu';
import { Button } from '@/components/ui/button';
import Logo from '../global/Logo';
import ActiveLink from '../global/ActiveLink';

export default function Navbar() {
  const user = true;
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-10 border-b-2 bg-stone-950/80">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Logo />

          <nav className="hidden text-sm font-medium md:block">
            <ul className="flex items-center gap-6">
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
          </nav>
          <div className="user">
            {user ? (
              <UserMenu />
            ) : (
              <Button
                variant="outline"
                className="rounded-none border-2 bg-transparent hover:bg-stone-100 hover:text-stone-950"
              >
                Login Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
