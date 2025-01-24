import { press_start_2p } from '@/constants/fonts';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import Img from './assets/features-1.jpg';
export default function ServicesCard() {
  return (
    <Card className="mx-auto mb-8 max-w-4xl rounded-none border-2 bg-transparent text-stone-100">
      <div className="flex flex-col gap-6 p-6 md:flex-row">
        {/* Text Content */}
        <div className="w-full md:max-w-[50%] md:flex-1">
          <CardHeader className="mb-4 p-0">
            <div className="mb-2 flex items-center gap-4 text-sm text-stone-400">
              <span>Rating</span>
              <span>•</span>
              <span className="text-red-600">5</span>
            </div>
            <h3 className={`${press_start_2p.className} mb-4 text-xl text-red-600 md:text-2xl`}>
              fake money
            </h3>
          </CardHeader>

          <CardContent className="space-y-5 p-0">
            <p>
              <span className="font-semibold text-red-600">Service description: </span> 1000000
              dollars
            </p>
            <p>
              <span className="font-semibold text-red-600">Service Price: </span> 500 credits
            </p>
          </CardContent>

          <div className="mt-4">
            <Link
              href={`/articles/111`}
              className="text-sm text-red-600 hover:underline"
            >
              More details
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-48 w-full md:h-48 md:w-2/5">
          <Image
            src={Img}
            fill
            className="rounded-sm object-cover"
            alt="sdfds"
            priority
          />
        </div>
      </div>
    </Card>
  );
}
