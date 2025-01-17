import Image from 'next/image';
import React from 'react';
import Img from './assets/features-1.jpg';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ProductInfo from '../products/ProductInfo';
import { ProductImageSlider } from '../products/ProductImagesSlider';
import Link from 'next/link';

export default function OrderDetails() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="max-w-[80%] px-8">
        <ProductImageSlider />
        <div className="flex flex-col gap-5 p-10">
          <p>
            <span className="font-semibold text-red-600">Product Name: </span> fake money
          </p>
          <p>
            <span className="font-semibold text-red-600">Product Description: </span> 1000000
            dollars
          </p>
          <p>
            <span className="font-semibold text-red-600">Product Price: </span> 100$
          </p>
        </div>
      </div>
      <div>
        <div className="mb-10 flex flex-col gap-5 md:mt-10">
          <p>
            <span className="font-semibold text-red-600">Order Quantity: </span> 2
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Price: </span> 100$
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Status: </span> Pending
          </p>
          <p>
            <span className="font-semibold text-red-600">Created At: </span> 05-01-2025
          </p>
          <p>
            <span className="font-semibold text-red-600">Finished / canceld At: </span> 05-01-2025
          </p>
        </div>
        <div className="checkout flex gap-5">
          <Button variant="ourButton">Finish</Button>
          <Button variant="ourButton">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
