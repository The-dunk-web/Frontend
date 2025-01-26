'use client';
import Link from 'next/link';
import Image from 'next/image';

import { press_start_2p } from '@/constants/fonts';
import { Card, CardContent, CardHeader } from '../ui/card';
import Img from '@/assets/features-1.jpg';
import { ServicesType } from '@/types/interfaces';
import useAuthStore from '@/middleware/authMiddleware';

export default function ServicesCard({ service }: { service: ServicesType }) {
  const { user } = useAuthStore();
  const isOwner = user?.id + '' === service.userId;
  return (
    <Card className="mx-auto mb-8 max-w-4xl rounded-none border-2 bg-transparent text-stone-100">
      <div className="flex flex-col gap-6 p-6 md:flex-row">
        {/* Text Content */}
        <div className="w-full md:max-w-[50%] md:flex-1">
          <CardHeader className="mb-4 p-0">
            <div className="mb-2 flex items-center gap-4 text-sm text-stone-400">
              <span>Rating</span>
              <span className="text-3xl font-bold">•</span>
              <span className="text-red-600">{service.overallRating}</span>

              {isOwner && (
                <>
                  <span className="text-3xl font-bold">•</span>
                  <span className="text-xs text-red-500">(Your Service)</span>
                </>
              )}
            </div>
            <h3 className={`${press_start_2p.className} mb-4 text-xl text-red-600 md:text-2xl`}>
              {service.name}
            </h3>
          </CardHeader>

          <CardContent className="space-y-5 p-0">
            <p>
              <span className="font-semibold text-red-600">Service description: </span>{' '}
              {service.description}
            </p>
            <p>
              <span className="font-semibold text-red-600">Service Price: </span> {service.price}{' '}
              credits
            </p>
          </CardContent>

          <div className="mt-4">
            <Link
              href={`/services/${service.id}`}
              className="text-sm text-red-600 hover:underline"
            >
              More details
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-48 w-full md:h-48 md:w-2/5">
          <Image
            src={service?.images[0] || Img}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-sm object-cover"
            alt="sdfds"
            priority
          />
        </div>
      </div>
    </Card>
  );
}
