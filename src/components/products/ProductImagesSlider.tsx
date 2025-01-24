import * as React from 'react';
import img1 from '../landing/assets/darkStore-1.jpg';
import img2 from '../landing/assets/archive-2.jpg';
import img3 from '../landing/assets/archive.jpg';
import img4 from '../landing/assets/services.jpg';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
const imgs = [img1, img2, img3, img4];

export function ProductImageSlider({ productImgs }: { productImgs: string[] }) {
  return (
    <Carousel className="m-2">
      <CarouselContent>
        {productImgs?.map((img, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="rounded-none border-none bg-transparent">
                <CardContent className="flex items-center justify-center p-2">
                  <Image
                    src={img}
                    width={900}
                    height={900}
                    alt="red room"
                    className="h-[360px] object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="size-10 rounded-none border-2 bg-transparent font-bold text-zinc-100" />
      <CarouselNext className="size-10 rounded-none border-2 bg-transparent font-bold text-zinc-100" />
    </Carousel>
  );
}
