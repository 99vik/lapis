'use client';

import Image from 'next/image';
import { Tabs } from './ui/tabs';

export function ProjectsTabs() {
  const tabs = [
    {
      title: 'MICORC Project',
      value: 'MICORC Project',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>AMICORC Project</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Cartesian coordinate robot project',
      value: 'Cartesian coordinate robot projec',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Cartesian coordinate robot projec</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Bodily awareness control and virtual reality',
      value: 'Bodily awareness control and virtual reality',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Bodily awareness control and virtual reality</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Student projects',
      value: 'Student projects',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Student projects</p>
          <p>tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10 mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
