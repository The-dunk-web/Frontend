import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Img from './assets/features-1.jpg';

export default function OrderCard() {
  return (
    <div className="pt-2">
      <Link
        href="/orders/36598835989"
        className="underline-offset-4 hover:underline"
      >
        <span className="font-semibold text-red-600">Order# </span> 36598835989
      </Link>
      <div className="mt-3 grid gap-3 md:grid-cols-3 lg:grid-cols-2">
        <div className="flex flex-col gap-5 md:col-span-2 md:flex-row md:items-center lg:col-span-1">
          <div className="image sm:w-2/3 md:w-1/2 lg:w-1/3">
            <Image
              src={Img}
              width={900}
              height={900}
              alt="red room"
            />
          </div>
          <div className="orderDetails flex flex-col gap-3 md:w-1/2 lg:w-2/3">
            <div>
              <p className="font-semibold text-red-600">Product Name: </p>
              <p>fake money</p>
            </div>
            <div>
              <p className="font-semibold text-red-600">Product Description: </p>
              <p>1000000 dollars</p>
            </div>
            <div>
              <span className="font-semibold text-red-600">Product Quantity: </span> 2
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p>
            <span className="font-semibold text-red-600">Order Price: </span> 100$
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Status: </span> Pending
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Date: </span> 05-01-2025
          </p>
        </div>
      </div>
    </div>
  );
}
