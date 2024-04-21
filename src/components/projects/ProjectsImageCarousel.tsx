import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProjectImageCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="self-center w-[800px]">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="flex bg-center bg-contain bg-no-repeat h-[450px]"
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white hover:bg-white/80 hover:text-black text-black" />
      <CarouselNext className="bg-white hover:bg-white/80 hover:text-black text-black" />
    </Carousel>
  );
}
