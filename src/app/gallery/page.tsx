import DisplayedBreadcrumb from '@/components/breadcrumb';
import img0 from '@/../public/projectExp.jpg';
import img1 from '@/../public/projects/amicorn/1.jpg';
import img2 from '@/../public/projects/amicorn/2.jpg';
import img3 from '@/../public/projects/amicorn/3.jpg';
import img4 from '@/../public/projects/amicorn/4.jpg';
import img5 from '@/../public/img1.jpg';
import img6 from '@/../public/studiesExp.jpg';
import img7 from '@/../public/img2.jpg';
import img8 from '@/../public/img3.jpeg';

import Image from 'next/image';

export default function Page() {
  return (
    <>
      <DisplayedBreadcrumb path={['Gallery']} />

      <main className="grid grid-cols-5 gap-4 mt-2 mx-2 sm:mx-6 lg:mx-14 mb-8">
        <div className="rounded-xl col-span-2 h-[200px]">
          <Image
            width={900}
            height={601}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img0.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            width={5760}
            height={2592}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img2.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={1308}
            width={1168}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img3.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={1216}
            width={806}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img4.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            width={2592}
            height={5760}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img1.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={900}
            width={600}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img5.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={900}
            width={600}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img6.src}
          />
        </div>
        <div className="rounded-xl col-span-2 h-[200px]">
          <Image
            height={2048}
            width={1536}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img8.src}
          />
        </div>
        <div className="rounded-xl col-span-2 h-[200px]">
          <Image
            height={6000}
            width={4000}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img7.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            width={5760}
            height={2592}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img2.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={1308}
            width={1168}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img3.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={1216}
            width={806}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img4.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            width={2592}
            height={5760}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img1.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={900}
            width={600}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img5.src}
          />
        </div>
        <div className="rounded-xl h-[200px]">
          <Image
            height={900}
            width={600}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img6.src}
          />
        </div>
        <div className="rounded-xl col-span-2 h-[200px]">
          <Image
            height={2048}
            width={1536}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img8.src}
          />
        </div>
        <div className="rounded-xl col-span-2 h-[200px]">
          <Image
            height={6000}
            width={4000}
            alt="gallery"
            className="object-cover object-center h-full w-full rounded-xl"
            src={img7.src}
          />
        </div>
      </main>
    </>
  );
}
