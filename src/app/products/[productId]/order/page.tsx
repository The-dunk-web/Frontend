import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { press_start_2p } from '@/constants/fonts';
import React from 'react';

export default function page() {
  return (
    <div className="mx-auto w-full max-w-xl px-8">
      <h1 className={`${press_start_2p.className} mb-5 text-center text-red-500`}>
        Complete your order
      </h1>
      <div className="flex flex-col gap-5 p-10">
        <p>
          <span className="font-semibold text-red-600">Product Name: </span> fake money
        </p>
        <p>
          <span className="font-semibold text-red-600">Product Description: </span> 1000000 dollars
        </p>
        <p>
          <span className="font-semibold text-red-600">Product Price: </span> 100$
        </p>

        <p className="flex items-center gap-4">
          <span className="font-semibold text-red-600">Quantity: </span>{' '}
          <Input
            type="number"
            className="w-auto rounded-none border-2"
            defaultValue="1"
            min="1"
            max="900"
          />
        </p>
        <p>
          <span className="font-semibold text-red-600">Total Price: </span> 100$
        </p>

        <Button variant="ourButton">Place order</Button>
      </div>
    </div>
  );
}
