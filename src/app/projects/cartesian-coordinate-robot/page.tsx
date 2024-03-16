import { SparklesTitle } from '@/components/SparklesTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cartesian robot project',
};

export default function Page() {
  return (
    <main>
      <SparklesTitle title="Cartesian coordinate robot project" />
      <p>cartesian robot</p>
    </main>
  );
}
