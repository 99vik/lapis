import { SparklesTitle } from '@/components/SparklesTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AMICORN',
};

export default function Page() {
  return (
    <main>
      <SparklesTitle title="AMICORC Project" />
      <p>amicorn</p>
    </main>
  );
}
