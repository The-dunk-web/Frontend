import { press_start_2p } from '@/constants/fonts';
import React from 'react';
export default function RedRoomView() {
  return (
    <div className="min-h-screen">
      <header className="mb-10 flex h-[400px] flex-col items-center justify-end gap-5 bg-red-room-pattern bg-cover bg-center pb-10">
        <h1 className={`${press_start_2p.className} text-2xl tracking-wider text-red-600`}>
          Red Rooms
        </h1>
        <p className="mb-20 max-w-[800px] text-center text-xl">
          Experience the most forbidden, live-streamed spectacles—reserved for the truly curious.
        </p>

        {/*  <Link href="/services/new">
          <Button variant="ourButton">Create a Services now</Button>
        </Link> */}
      </header>
      <div className="container mx-auto">
        <h2 className="py-20 text-center text-red-500">
          This Section is under development right now{' '}
        </h2>
      </div>
    </div>
  );
}
