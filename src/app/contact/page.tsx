import { LocationPin } from '@/components/LocationPin';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import MainContentHolder from '@/components/MainContentHolder';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <>
      <DisplayedBreadcrumb path={['Contact']} />
      <MainContentHolder title="Contact">
        <div className="py-5 px-3 sm:px-5 xl:px-12 grid grid-cols-2">
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
        <ContactForm />
      </MainContentHolder>
    </>
  );
}
