import MainTitle from '@/components/MainTitle';
import { ProjectsTabs } from '@/components/ProjectsTabs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <MainTitle title="Projects" />
      <ProjectsTabs />
    </main>
  );
}
