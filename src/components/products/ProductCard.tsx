import React from 'react';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import image from '../../components/landing/assets/darkStore-1.jpg';
import { press_start_2p } from '@/constants/fonts';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <Card className="flex flex-col justify-between rounded-none border-2 bg-transparent text-stone-100">
      <div className="relative">
        <Image
          src={image}
          width={900}
          height={900}
          alt="red room"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-features-pattern">
          <h3 className="name text-2xl tracking-wider">Fake money</h3>
        </div>
      </div>
      <CardHeader className="">
        <CardTitle
          className={`${press_start_2p.className} description tracking-wider text-red-600`}
        >
          1000000 dollars
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          <span className="font-semibold text-red-600">Price: </span> 100$
        </p>
        <p>
          <span className="font-semibold text-red-600">Stock: </span> 900
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href="/products/4a34e3d4-9bbb-41ad-abd6-c438a9c94537"
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
