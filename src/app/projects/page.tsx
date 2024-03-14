import { ProjectsTabs } from '@/components/ProjectsTabs';
import { SparklesTitle } from '@/components/SparklesTitle';

export default function Page() {
  return (
    <main className="min-h-screen pt-10">
      <SparklesTitle title="Projects" />
      <ProjectsTabs />
    </main>
  );
}
