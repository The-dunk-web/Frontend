import React from 'react';
import { ProductImageSlider } from './ProductImagesSlider';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { press_start_2p } from '@/constants/fonts';
import PlaceOrder from './PlaceOrder';

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photos: string[];
}

export default function ProductInfo({ product }: { product: ProductType }) {
  return (
    <div className="mx-auto w-full max-w-xl px-8">
      <h1 className={`${press_start_2p.className} mb-5 text-center text-red-500`}>
        Product Details
      </h1>
      <ProductImageSlider productImgs={product.photos} />
      <div className="flex flex-col gap-5 p-10">
        <p>
          <span className="font-semibold text-red-600">Product Name: </span> {product.name}
        </p>
        <p>
          <span className="font-semibold text-red-600">Product Description: </span>{' '}
          {product.description}
        </p>
        <p>
          <span className="font-semibold text-red-600">Product sotk: </span> {product.quantity}
        </p>
        <p>
          <span className="font-semibold text-red-600">Product Price: </span> {product.price}{' '}
          credits
        </p>

        <PlaceOrder product={product} />

        {/*         <p className="flex items-center gap-4">
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

        {product.quantity > 0 ? (
          // <Link href={`/products/${product.id}/order`}>
          <Button
            variant="ourButton"
            className="w-full"
          >
            order now
          </Button>
        ) : (
          // </Link>
          <Button
            disabled
            variant="ourButton"
            className="w-full"
          >
            Out Of Stock
          </Button>
        )} */}
      </div>
    </div>
  );
}
