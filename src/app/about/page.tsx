import { LocationPin } from '@/components/LocationPin';
import MainTitle from '@/components/MainTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <MainTitle title="About us" />
      <LocationPin />
    </main>
  );
}
