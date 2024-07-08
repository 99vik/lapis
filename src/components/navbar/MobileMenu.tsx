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
        <SheetTrigger className="md:hidden" asChild>
          <Button
            variant="ghost"
            className="w-fit h-fit p-0 hover:bg-transparent"
          >
            <Menu size={40} strokeWidth={1.5} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="flex flex-col items-center h-screen gap-7 text-3xl pt-12"
        >
          <SheetClose asChild>
            <Link href="/" className="w-full">
              <div className="flex justify-center items-center gap-2 pb-4 w-full border-b">
                <Image src="/logo.png" width={32} height={32} alt="Logo" />
                <p className="font-bold text-2xl">LAPIS</p>
              </div>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/projects">Projects</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/studies">Studies</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/news">News</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/gallery">Gallery</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about">About us</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/contact">Contact</Link>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
}
