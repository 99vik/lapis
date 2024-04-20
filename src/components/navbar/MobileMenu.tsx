'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="sm:hidden" asChild>
          <Button
            variant="ghost"
            className="w-fit h-fit p-0 hover:bg-transparent"
          >
            <Menu size={40} strokeWidth={1.5} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="flex flex-col items-center h-screen gap-6 text-3xl pt-12"
        >
          <div className="flex justify-center items-center gap-2 pb-4 w-full border-b">
            <Image src="/logo.png" width={32} height={32} alt="Logo" />
            <p className="font-bold text-2xl">LAPIS</p>
          </div>
          <SheetClose asChild>
            <Link href="/">Home</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/projects">Projects</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about">About us</Link>
          </SheetClose>
          <div className="flex flex-col text-zinc-500 gap-3 border-t w-full items-center">
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
