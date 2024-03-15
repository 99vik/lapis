'use client';

import React from 'react';
import { SparklesCore } from './ui/sparkles';

export function SparklesTitle({ title }: { title: string }) {
  return (
    <div className="h-fit mt-4 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-5xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
      <div className="w-full h-fit relative ">
        <div className="flex w-full">
          <div className="h-[1px] w-full bg-white"></div>
        </div>
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1}
          particleDensity={1000}
          className="w-full"
          particleColor="#34d3eb"
        />
        <div className="absolute inset-0 w-full bg-grid-small-white/[0.2] bg-background [mask-image:radial-gradient(220px_120px_at_top,transparent_75%,white)]"></div>
      </div>
    </div>
  );
}