'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function MobileMenu() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="sm:hidden">
        <Button
          variant="ghost"
          className="w-fit h-fit p-2"
          onClick={() => setMenu((prev) => !prev)}
        >
          <Menu size={40} strokeWidth={1.5} />
        </Button>
      </div>
      {menu && (
        <>
          <div className="absolute left-0 top-0 animate-in slide-in-from-top-full -z-50 h-screen w-full bg-secondary"></div>
        </>
      )}
    </>
  );
}
