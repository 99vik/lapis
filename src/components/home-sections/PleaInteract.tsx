import React from 'react';
import { EvervaultCard } from '../ui/evervault-card';
import Link from 'next/link';

export function PleaInteract() {
  return (
    <div className="border hover:border-white/40 hover:shadow-[0_0px_20px_10px_rgba(255,255,255,0.2)] transition rounded-3xl overflow-hidden flex flex-col items-start max-w-sm mx-auto relative h-[250px] aspect-square">
      <Link href="/projects" className="w-full">
        <EvervaultCard text="PLEA" />
      </Link>
    </div>
  );
}
