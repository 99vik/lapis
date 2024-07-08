'use client';

import DisplayedBreadcrumb from '@/components/breadcrumb';
import img0 from '@/../public/projectExp.jpg';
import img1 from '@/../public/projects/amicorc/1.jpg';
import img2 from '@/../public/projects/amicorc/2.jpg';
import img3 from '@/../public/projects/amicorc/3.jpg';
import img4 from '@/../public/projects/amicorc/4.jpg';
import img5 from '@/../public/img1.jpg';
import img6 from '@/../public/studiesExp.jpg';
import img7 from '@/../public/img4.jpg';
import img8 from '@/../public/img3.jpg';

import Image, { StaticImageData } from 'next/image';
import { ImageDialog } from '@/components/ImageDialog';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState<StaticImageData | undefined>(undefined);

  const images = [img0, img2, img3, img4, img1, img5, img6, img8, img7];

  return (
    <>
      <DisplayedBreadcrumb path={['Gallery']} />
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
