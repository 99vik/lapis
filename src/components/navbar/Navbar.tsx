import Image from 'next/image';
import Link from 'next/link';
import { NavbarMenu } from './NavbarMenu';

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-background/60 backdrop-blur border-b">
      <div className="flex mx-auto max-w-screen-2xl items-center justify-between px-14 py-4">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={32} height={32} alt="Logo" />
            <p className="font-bold text-2xl">LAPIS</p>
          </div>
        </Link>
        <div>
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}
