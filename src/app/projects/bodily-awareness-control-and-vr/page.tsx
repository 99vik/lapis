import { SparklesTitle } from '@/components/SparklesTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awareness control and VR',
};

export default function Page() {
  return (
    <main>
      <SparklesTitle title="Bodily awareness control and virtual reality" />
      <p>bodily awareness</p>
    </main>
  );
}
