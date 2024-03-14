import React from 'react';
import { EvervaultCard } from '../ui/evervault-card';
import Link from 'next/link';

export function AmicornProject() {
  return (
    <div className="grid mb-32 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:w-[80%] max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="border hover:border-white/40 hover:shadow-[0_0px_20px_10px_rgba(255,255,255,0.2)] transition rounded-3xl overflow-hidden flex flex-col items-start max-w-sm mx-auto relative h-[240px] aspect-square">
          <Link href="/projects" className="w-full">
            <EvervaultCard text="PLEA" />
          </Link>
        </div>
        <p className="text-sm text-zinc-500 font-semibold mt-1">
          Interact with PLEA
        </p>
      </div>
      <div className="order-first lg:order-last">
        <Link href="/projects" className="hover:underline">
          <h2 className="text-2xl font-bold mb-2">AMICORN Project</h2>
        </Link>
        <p className="mb-5 text-zinc-300">
          Maecenas ac leo ante. Maecenas a ligula leo. Aliquam eget venenatis
          risus. Donec eget ultrices augue. Ut sodales tortor sem, id suscipit
          massa tristique ut.
        </p>
      </div>
    </div>
  );
}
