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
      <main className="">
        <LocationPin />
      </main>
    </>
  );
}
