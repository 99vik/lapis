import Image from 'next/image';
import Link from 'next/link';
import { NavbarMenu } from './NavbarMenu';
import MobileMenu from './MobileMenu';
import TransparencyControl from './TransparencyControl';

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 transition">
      <TransparencyControl />
      <div className="flex mx-auto max-w-screen-2xl items-center justify-between px-3 sm:px-8 lg:px-16 py-4">
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
