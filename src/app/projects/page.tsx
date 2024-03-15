import { ProjectsTabs } from '@/components/ProjectsTabs';
import { SparklesTitle } from '@/components/SparklesTitle';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <SparklesTitle title="Projects" />
      <ProjectsTabs />
    </main>
  );
}
