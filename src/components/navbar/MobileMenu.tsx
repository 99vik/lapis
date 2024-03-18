'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function MobileMenu() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Sheet>
        <SheetTrigger className='className="sm:hidden"' asChild>
          <Button
            variant="ghost"
            className="w-fit h-fit p-2 hover:bg-transparent"
            onClick={() => setMenu((prev) => !prev)}
          >
            <Menu size={40} strokeWidth={1.5} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="flex flex-col h-screen text-2xl pt-10"
        >
          <Link href="/projects">Projects</Link>
          <Link href="/about">About us</Link>
          <div className="flex flex-col text-zinc-500 gap-3 items-start">
            <p className="text-white mt-4">Interact</p>
            <Link href="/about">PLEA</Link>
            <Link href="/about">VR Lab</Link>
          </div>
        </SheetContent>
      </Sheet>
      {/* <div className="sm:hidden">
        <Button
          variant="ghost"
          className="w-fit h-fit p-2 hover:bg-transparent"
          onClick={() => setMenu((prev) => !prev)}
        >
          <Menu size={40} strokeWidth={1.5} />
        </Button>
      </div>
      {menu && (
        <div className="absolute flex flex-col gap-6 text-2xl items-start px-6 pt-[110px] fade-in left-0 top-0 animate-in slide-in-from-top-full -z-50 h-screen w-full bg-background">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About us</Link>
          <div className="flex flex-col text-zinc-500 gap-3 items-start">
            <p className="text-white mt-4">Interact</p>
            <Link href="/about">PLEA</Link>
            <Link href="/about">VR Lab</Link>
          </div>
        </div>
      )} */}
    </>
  );
}
