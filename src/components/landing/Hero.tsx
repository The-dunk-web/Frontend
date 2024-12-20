import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import UserMenu from './UserMenu';

const Hero = () => {
  const user = true;
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10 border-b-2 bg-stone-950/80">
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
      <div className="heroSection bg-hero-gradient bg-hero-pattern grid h-svh place-content-center from-teal-400 to-blue-500 bg-cover bg-center">
        <div className="container flex flex-col items-center justify-center">
          <header className="mx-auto p-10 py-28 text-center lg:w-2/3">
            <h1 className="mb-5 text-3xl font-medium md:text-4xl">
              Unveil the <span className="uppercase text-red-500">Unseen</span>: Navigate The Dunk
              Web
            </h1>
            <p className="mx-auto text-base font-light tracking-wider md:text-lg">
              The ultimate playground for your curiosity, Where the lines between the real and
              surreal blur.
            </p>
          </header>
          <Button
            variant="outline"
            className="rounded-none border-2 bg-transparent p-6 text-lg hover:bg-stone-100 hover:text-stone-950"
          >
            Start Your Jounry Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
