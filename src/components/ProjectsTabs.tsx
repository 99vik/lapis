'use client';

import { Tabs } from './ui/tabs';

export function ProjectsTabs() {
  const tabs = [
    {
      title: 'AMICORC Project',
      value: 'MICORC Project',
      content: (
        <div className="w-full overflow-hidden border border-zinc-400 relative h-[350px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-zinc-300">
          <p>AMICORC Project</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Cartesian coordinate robot project',
      value: 'Cartesian coordinate robot project',
      content: (
        <div className="w-full overflow-hidden border border-zinc-400 relative h-[350px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-zinc-300">
          <p>Cartesian coordinate robot project</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Bodily awareness control and virtual reality',
      value: 'Bodily awareness control and virtual reality',
      content: (
        <div className="w-full overflow-hidden border border-zinc-400 relative h-[350px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-zinc-300">
          <p>Bodily awareness control and virtual reality</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Mixed reality applications',
      value: 'Mixed reality applications',
      content: (
        <div className="w-full overflow-hidden border border-zinc-400 relative h-[350px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-zinc-300">
          <p>Mixed reality applications</p>
          <p>tab</p>
        </div>
      ),
    },
    {
      title: 'Student projects',
      value: 'Student projects',
      content: (
        <div className="w-full overflow-hidden border border-zinc-400 relative h-[350px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-zinc-300">
          <p>Student projects</p>
          <p>tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[400px] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-screen flex-1 items-start justify-start mt-10 mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
