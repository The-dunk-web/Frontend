import { press_start_2p } from '@/constants/fonts';
import React from 'react';
import { ProductImageSlider } from '../products/ProductImagesSlider';
import Image from 'next/image';
import Img from './assets/features-1.jpg';
import { Button } from '../ui/button';
import GetServiceBtn from './GetServiceBtn';

interface ServicesType {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  overallRating: number;
  user: {
    firstName: string;
    lastName: string;
    profile: string;
  };
  userId: string;
}

export default function ServiceDetails({ service }: { service: ServicesType }) {
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
            {`${service.user.firstName} ${service.user.lastName}`}{' '}
            <span className="text-sm text-zinc-500">Owner</span>
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
