import { AboutUsAccordion } from '@/components/AboutUsAccordion';
import { LocationPin } from '@/components/LocationPin';
import MainTitle from '@/components/MainTitle';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <>
      <DisplayedBreadcrumb path={['About']} />
      <main className="bg-black border rounded-xl mt-2 mx-auto w-[900px] py-6 mb-6">
        <h1 className="text-3xl text-center font-bold">About us</h1>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        <div className="space-y-2 pt-2 pb-6 px-5 xl:px-12">
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
            varius nisl id consectetur eleifend. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <AboutUsAccordion />
        <LocationPin />
      </main>
    </>
  );
}
