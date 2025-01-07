import React from 'react';
import { ProductImageSlider } from './ProductImagesSlider';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CreateVisa from './CreateVisa';

export default function ProductInfo() {
  return (
    <div className="mx-auto w-full max-w-xl px-8">
      <ProductImageSlider />
      <div className="flex flex-col gap-5 p-10">
        <p>
          <span className="font-semibold text-red-600">Product Name: </span> fake money
        </p>
        <p>
          <span className="font-semibold text-red-600">Product Description: </span> 1000000 dollars
        </p>
        <p>
          <span className="font-semibold text-red-600">Product sotk: </span> 900
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

        <Button variant="ourButton">Create order now</Button>
      </div>
      <CreateVisa />
    </div>
  );
}
