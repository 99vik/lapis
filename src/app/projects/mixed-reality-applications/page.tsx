import { SparklesTitle } from '@/components/SparklesTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mixed reality applications',
};

export default function Page() {
  return (
    <main>
      <SparklesTitle title="Mixed reality applications" />
      <p>midex reality applications</p>
    </main>
  );
}
