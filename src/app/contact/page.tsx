import { AboutUsAccordion } from '@/components/AboutUsAccordion';
import { LocationPin } from '@/components/LocationPin';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { Metadata } from 'next';
import Image from 'next/image';
import img from '@/../public/img4.jpg';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <>
      <DisplayedBreadcrumb path={['Contact']} />
      <main className="bg-black border rounded-xl mt-2 mx-2 md:mx-6 lg:mx-auto lg:w-[950px] py-6 mb-6">
        <h1 className="text-3xl text-center font-bold">Contact</h1>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        <div className="pt-2 pb-3 px-3 sm:px-5 xl:px-12 grid grid-cols-2">
          <div className="flex flex-col items-center">
            <p className="font-bold text-lg mb-1">E-mail</p>
            <p className="">Email1@example.com</p>
            <p className="">Email2@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-lg mb-1">Address</p>
            <p className="">Ivana Lučića 5,</p>
            <p className="">10 000 Zagreb, Croatia</p>
          </div>
        </div>
        <LocationPin />
      </main>
    </>
  );
}
