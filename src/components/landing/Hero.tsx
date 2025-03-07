import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="heroSection bg-hero-gradient grid h-svh place-content-center bg-hero-pattern from-teal-400 to-blue-500 bg-cover bg-center">
        <div className="container flex flex-col items-center justify-center">
          <header className="mx-auto p-10 py-28 text-center lg:w-2/3">
            <h1 className="mb-5 text-3xl font-medium md:text-4xl">
              Unveil the <span className="uppercase text-red-600">Unseen</span>: Navigate The Dunk
              Web
            </h1>
            <p className="mx-auto text-base font-light tracking-wider md:text-lg">
              The ultimate playground for your curiosity, Where the lines between the real and
              surreal blur.
            </p>
          </header>
          <Link href="/products">
            <Button
              variant="ourButton"
              className="p-6 text-lg"
            >
              Start Your Jounry Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
