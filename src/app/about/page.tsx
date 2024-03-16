import { LocationPin } from '@/components/LocationPin';
import { SparklesTitle } from '@/components/SparklesTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <SparklesTitle title="About us" />
      <LocationPin />
    </main>
  );
}
