'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex relative flex-col md:flex-row mb-32 sm:mb-0 mt-11 sm:mt-0 sm:min-h-[calc(100vh-72px)] gap-20 md:gap-12 items-center justify-center px-4 sm:px-6 md:w-[75%] mx-auto">
      <Image
        src="/logo-big.png"
        className="h-[200px] w-auto sm:-translate-y-[72px]"
        width={638}
        height={391}
        alt="hero image"
      />
      <div className="sm:-translate-y-[72px]">
        <p className="text-2xl sm:text-4xl mb-6 font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Laboratory for Manufacturing and Assembly Systems Planning
        </p>
        <ul className="list-disc flex flex-col gap-1 list-outside ms-4 text-neutral-400">
          <li>Chair for Manufacturing and Assembly Systems Planning</li>
          <li>Department of Robotics and Production System Automation</li>
          <li>Faculty of Mechanical Engineering and Naval Architecture</li>
          <li> University of Zagreb</li>
        </ul>
      </div>
      <button
        onClick={() => window.scrollTo(0, 500)}
        className="absolute bottom-2 left-[calc(50%-15px)] animate-bounce rounded-full border-2 border-white p-1"
      >
        <ArrowDown size={18} />
      </button>
    </div>
  );
}
