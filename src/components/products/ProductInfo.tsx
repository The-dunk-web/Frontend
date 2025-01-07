import React from 'react';
import { ProductImageSlider } from './ProductImagesSlider';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { press_start_2p } from '@/constants/fonts';

export default function ProductInfo({ productId }: { productId: string }) {
  return (
    <div className="mx-auto w-full max-w-xl px-8">
      <h1 className={`${press_start_2p.className} mb-5 text-center text-red-500`}>
        Product Details
      </h1>
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

        <Link href={`/products/${productId}/order`}>
          <Button
            variant="ourButton"
            className="w-full"
          >
            order now
          </Button>
        </Link>
      </div>
    </div>
  );
}
