'use client';

import Image, { StaticImageData } from 'next/image';
import { ImageDialog } from './ImageDialog';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function DisplayedImagesWithDialog({
  images,
}: {
  images: StaticImageData[];
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState<StaticImageData | undefined>(undefined);

  return (
    <>
      <ImageDialog open={modalOpen} setModalOpen={setModalOpen} image={image} />
      <main className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-2 mx-2 sm:mx-6 lg:mx-14 mb-8">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={cn(
                'rounded-xl h-[200px]',
                [0, 7, 8].includes(index) && 'col-span-2'
              )}
            >
              <Image
                onClick={() => {
                  setModalOpen(true);
                  setImage(image);
                }}
                src={image}
                quality={30}
                alt="gallery image"
                className="object-cover object-center h-full w-full rounded-xl cursor-pointer"
                placeholder="blur"
              />
            </div>
          );
        })}
      </main>
    </>
  );
}
