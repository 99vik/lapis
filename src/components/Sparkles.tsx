'use client';

import React from 'react';
import { SparklesCore } from './ui/sparkles';

export function Sparkles() {
  return (
    <div className="w-full h-[80px] sm:h-[100px] relative ">
      <SparklesCore
        background="transparent"
        minSize={0.3}
        maxSize={1}
        particleDensity={800}
        className="w-full"
        particleColor="#ffffff"
      />
      <div
        className="absolute inset-0 w-full bg-black
        [mask-image:radial-gradient(180px_80px_at_top,transparent_80%,white)]
        min-[600px]:[mask-image:radial-gradient(300px_100px_at_top,transparent_90%,white)]
        min-[900px]:[mask-image:radial-gradient(400px_100px_at_top,transparent_90%,white)]
        min-[1200px]:[mask-image:radial-gradient(500px_100px_at_top,transparent_90%,white)]"
      ></div>
    </div>
  );
}
