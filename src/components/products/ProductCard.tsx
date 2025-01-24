import React from 'react';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import image from '../../components/landing/assets/darkStore-1.jpg';
import { press_start_2p } from '@/constants/fonts';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photos: string[];
}

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card className="flex flex-col justify-between rounded-none border-2 bg-transparent text-stone-100">
      <div className="relative">
        <Image
          src={product.photos.length > 0 ? product.photos[0] : image}
          width={900}
          height={900}
          className="h-[180px] object-cover"
          alt={product.name}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-features-pattern">
          <h3 className="name text-2xl tracking-wider">{product.name}</h3>
        </div>
      </div>
      <CardHeader className="">
        <CardTitle
          className={`${press_start_2p.className} description tracking-wider text-red-600`}
        >
          {product.description}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          <span className="font-semibold text-red-600">Price: </span> {product.price} credits
        </p>
        <p>
          <span className="font-semibold text-red-600">Stock: </span> {product.quantity}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/products/${product.id}`}
          className="w-full"
        >
          <Button
            variant="ourButton"
            className="w-full self-end"
          >
            More Info
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
