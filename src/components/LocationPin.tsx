'use client';

import React from 'react';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';

export function LocationPin() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="Ul. Ivana Lučića 5, 10000, Zagreb">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Fakultet+strojarstva+i+brodogradnje/@45.7953982,15.9717697,17z/data=!3m1!4b1!4m6!3m5!1s0x4765d68ad9f699b9:0xf723dab18066040b!8m2!3d45.7953982!4d15.9717697!16s%2Fg%2F122t69cj?entry=ttu"
        >
          <div className="flex basis-full justify-between text-center flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Find us here.
            </h3>
            <Image
              width={700}
              height={475}
              src="/location.png"
              alt="map location"
            />
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Open in Google maps.</span>
            </div>
          </div>
        </a>
      </PinContainer>
    </div>
  );
}
