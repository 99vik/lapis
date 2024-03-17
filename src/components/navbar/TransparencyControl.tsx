'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function TransparencyControl() {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    function scrollCheck() {
      window.scrollY >= 50 ? setTransparent(false) : setTransparent(true);
    }
    scrollCheck();
    window.addEventListener('scroll', scrollCheck);
  }, []);

  return (
    <div
      className={cn(
        'absolute -z-40 w-full h-full transition',
        transparent
          ? 'backdrop-blur-none bg-background/0'
          : 'backdrop-blur bg-background/60 border-b'
      )}
    />
  );
}
