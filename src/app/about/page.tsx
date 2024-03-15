import { LocationPin } from '@/components/LocationPin';
import { SparklesTitle } from '@/components/SparklesTitle';

export default function Page() {
  return (
    <main className="min-h-screen">
      <SparklesTitle title="About us" />
      <LocationPin />
    </main>
  );
}
