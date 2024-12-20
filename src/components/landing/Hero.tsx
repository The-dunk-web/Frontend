import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import UserMenu from './UserMenu';

const Hero = () => {
  const user = true;
  return (
    <>
      <div className="fixed left-0 right-0 top-0 border-b-2">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="logo">
            <Link href="/">The Dunk Web</Link>
          </div>
          <nav className="hidden text-sm font-medium md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                  href="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="border-b-2 border-transparent px-2 py-1 hover:border-b-stone-100"
                  href="/red-rome"
                >
                  Red Rome
                </Link>
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
      <div className="heroSection grid h-svh place-content-center">Hero</div>
    </>
  );
};

export default Hero;
