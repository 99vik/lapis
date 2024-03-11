'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavbarMenu } from './NavbarMenu';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    function scrollCheck() {
      window.scrollY >= 80 ? setTransparent(false) : setTransparent(true);
    }
    window.addEventListener('scroll', scrollCheck);
  }, []);

  return (
    <nav
      className={cn(
        'w-full sticky top-0  z-50 transition',
        transparent ? 'bg-background/0' : 'bg-background/60 border-b'
      )}
    >
      <div
        className={cn(
          'absolute -z-40 w-full h-full bg-transparent transition',
          transparent ? 'backdrop-blur-none' : 'backdrop-blur'
        )}
      />
      <div className="flex mx-auto max-w-screen-2xl items-center justify-between px-10 md:px-16 py-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" width={32} height={32} alt="Logo" />
            <p className="font-bold text-2xl">LAPIS</p>
          </div>
        </Link>
        <NavbarMenu />
        <MobileMenu />
      </div>
    </nav>
  );
}
