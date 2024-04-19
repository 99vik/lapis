'use client';

import Image from 'next/image';
import { Sparkles } from '../Sparkles';

export default function Hero() {
  return (
    <section className="w-full sm:pb-8 mb-8 bg-black border-b border-white/30 shadow-lg shadow-white/10 -mt-[88px] sm:-mt-[72px]">
      <div className="h-[88px] sm:h-[72px]" />
      <div className="flex pt-4 pb-2 relative flex-col gap-8 sm:gap-20 md:gap-12 items-start justify-center px-2 md:w-[75%] mx-auto">
        <Image
          src="/logo-big.png"
          className="h-[200px] w-auto mx-auto"
          width={638}
          height={391}
          alt="hero image"
        />
        <div className="flex w-full flex-col items-center justify-start overflow-hidden rounded-md">
          <h1 className="text-2xl text-center sm:text-4xl mb-2 font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Laboratory for Manufacturing and Assembly Systems Planning
          </h1>
          <div className="h-[0.5px] w-full bg-gradient-to-r from-white/10 via-white to-white/10" />
          <Sparkles />
        </div>
      </div>
    </section>
  );
}
