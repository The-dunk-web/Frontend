import React, { JSX } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { press_start_2p } from '@/constants/fonts';
import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  title: string;
  subTitle: string;
  image: StaticImageData;
  paragraph: string;
}

export default function FeaturesCard({ title, subTitle, image, paragraph }: FeatureCardProps) {
  return (
    <Card className="flex flex-col justify-between rounded-none border-2 bg-transparent text-stone-100">
      <div className="relative">
        <Image
          src={image}
          width={900}
          height={900}
          alt="red room"
        />
        <div className="bg-features-pattern absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <h3 className="text-2xl tracking-wider">{title}</h3>
        </div>
      </div>
      <CardHeader className="">
        <CardTitle className={`${press_start_2p.className} tracking-wider text-red-600`}>
          {subTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{paragraph}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full self-end rounded-none border-2 border-stone-100 bg-transparent p-5 hover:bg-stone-100 hover:text-stone-950">
          Try Now
        </Button>
      </CardFooter>
    </Card>
  );
}
