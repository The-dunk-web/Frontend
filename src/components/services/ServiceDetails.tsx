'use client';
import React from 'react';
import Image from 'next/image';

import { press_start_2p } from '@/constants/fonts';
import { ProductImageSlider } from '../products/ProductImagesSlider';
import Img from '@/assets/features-1.jpg';
import GetServiceBtn from './GetServiceBtn';
import useAuthStore from '@/middleware/authMiddleware';
import { ServicesType } from '@/types/interfaces';

export default function ServiceDetails({ service }: { service: ServicesType }) {
  const { user } = useAuthStore();
  return (
    <div className="mx-auto w-full max-w-2xl px-8">
      <div className="space-y-5">
        <h1 className={`${press_start_2p.className} text-center text-red-500`}>Service Details</h1>
        <div className="flex items-center gap-5 px-5 pt-5">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image
              src={service.user.profile || Img}
              width={100}
              height={100}
              alt={`${service.user.firstName}imgae`}
            />
          </div>
          <p className="space-x-3 font-semibold text-red-600">
            {`${service.user.firstName} ${service.user.lastName}`}
            {user?.id + '' === service.userId && (
              <span className="ms-2 text-sm text-zinc-500"> Your service</span>
            )}
          </p>
        </div>

        <div className="px-10 pt-5">
          <ProductImageSlider productImgs={service.images} />
        </div>

        <div className="flex flex-col gap-5 px-10 pt-10">
          <p>
            <span className="font-semibold text-red-600">Service Name: </span> {service.name}
          </p>
          <p>
            <span className="font-semibold text-red-600">Service Description: </span>{' '}
            {service.description}
          </p>
          <p>
            <span className="font-semibold text-red-600">Service Price: </span> {service.price}
          </p>

          <p>
            <span className="font-semibold text-red-600">Service Rating: </span>{' '}
            {service.overallRating}
          </p>

          <GetServiceBtn service={service} />
        </div>
      </div>
    </div>
  );
}
