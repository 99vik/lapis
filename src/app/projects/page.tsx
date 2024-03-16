import { ProjectsTabs } from '@/components/ProjectsTabs';
import { SparklesTitle } from '@/components/SparklesTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <SparklesTitle title="Projects" />
      <ProjectsTabs />
    </main>
  );
}
