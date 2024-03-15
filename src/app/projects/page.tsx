import { ProjectsTabs } from '@/components/ProjectsTabs';
import { SparklesTitle } from '@/components/SparklesTitle';

export default function Page() {
  return (
    <main className="min-h-screen">
      <SparklesTitle title="Projects" />
      <ProjectsTabs />
    </main>
  );
}
