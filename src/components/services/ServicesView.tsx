import { press_start_2p } from '@/constants/fonts';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import AllServices from './AllServices';
export default function ServicesView() {
  return (
    <div className="min-h-screen">
      <header className="mb-10 flex h-[400px] flex-col items-center justify-end gap-5 bg-services-pattern bg-cover bg-center pb-10">
        <h1 className={`${press_start_2p.className} text-2xl tracking-wider text-red-600`}>
          Untraceable Services
        </h1>
        <p className="mb-20 max-w-[800px] text-center text-xl">
          Discover services that disappear without a trace, just like your tracks.
        </p>

        <Link href="/services/new">
          <Button variant="ourButton">Create a Services now</Button>
        </Link>
      </header>
      <AllServices />
    </div>
  );
}
