import { AboutUsAccordion } from '@/components/AboutUsAccordion';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { Metadata } from 'next';
import Image from 'next/image';
import img from '@/../public/img4.jpg';
import MainContentHolder from '@/components/MainContentHolder';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <>
      <DisplayedBreadcrumb path={['About']} />
      <MainContentHolder title="About us">
        <div className="space-y-2 pt-2 pb-6 px-3 sm:px-5 xl:px-12">
          <Image
            placeholder="blur"
            src={img}
            alt=""
            className="w-[310px] sm:w-[380px] h-auto max-sm:mx-auto sm:float-start mb-1 mr-7 rounded-xl"
          />
          <p>
            Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin
            vehicula. Nulla elementum dui metus, in volutpat massa bibendum eu.
            Cras feugiat cursus velit, et euismod arcu blandit ac. Vestibulum ut
            lorem vitae nibh interdum hendrerit et imperdiet mauris. Quisque
            varius nisl id consectetur eleifend. Maecenas vitae fermentum nunc.
            Donec nec risus lobortis, vulputate nisi in, posuere ligula. Nunc
            auctor sodales varius.
          </p>
          <p>
            Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin
            vehicula. Nulla elementum dui metus, in volutpat massa bibendum eu.
            Cras feugiat cursus velit, et euismod arcu blandit ac. Vestibulum ut
            lorem vitae nibh interdum hendrerit et imperdiet mauris. Quisque
            varius nisl id consectetur eleifend. Maecenas vitae fermentum nunc.
            Donec nec risus lobortis, vulputate nisi in, posuere ligula. Nunc
            auctor sodales varius. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p>
            Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin
            vehicula. Nulla elementum dui metus, in volutpat massa bibendum eu.
            Cras feugiat cursus velit, et euismod arcu blandit ac. Vestibulum ut
            lorem vitae nibh interdum hendrerit et imperdiet mauris. Quisque
            varius nisl id consectetur eleifend. Maecenas vitae fermentum nunc.
            Donec nec risus lobortis, vulputate nisi in, posuere ligula. Nunc
            auctor sodales varius.
          </p>
        </div>
      </MainContentHolder>
    </>
  );
}
