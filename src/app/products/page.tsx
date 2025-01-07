import { Button } from '@/components/ui/button';
import { press_start_2p } from '@/constants/fonts';
import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="bg-sale-pattern flex h-[400px] flex-col items-center justify-end gap-5 bg-cover bg-center pb-10">
        <h1 className={`${press_start_2p.className} text-2xl tracking-wider text-red-600`}>
          dark Artifacts
        </h1>
        <p className="max-w-[800px] text-center text-xl">
          Browse our exclusive marketplace for items and services you won’t find anywhere else.
        </p>
        <p>
          Get a <span className={`tracking-wider text-red-600`}>50% OFF</span> on all products when
          you sign in
        </p>
        <Button variant="ourButton">Sign In Now</Button>
      </div>
      <div className="container mx-auto"></div>
    </div>
  );
}
