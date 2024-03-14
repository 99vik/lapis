'use client';

import React from 'react';
import { SparklesCore } from '../ui/sparkles';

export function SparklesTitle({ title }: { title: string }) {
  return (
    <div className="h-fit flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-5xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
      <div className="w-full h-fit relative ">
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
        <div className="flex w-full">
          <div className="h-[1px] w-full bg-white"></div>
        </div>

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1}
          particleDensity={1000}
          className="w-full"
          particleColor="#34d3eb"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full bg-grid-small-white/[0.2] bg-background [mask-image:radial-gradient(220px_120px_at_top,transparent_75%,white)]"></div>
      </div>
    </div>
  );
}
