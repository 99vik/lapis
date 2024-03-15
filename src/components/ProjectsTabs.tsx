'use client';

import { ReactNode } from 'react';
import { Tabs } from './ui/tabs';
import { projectsTabsContent } from '@/lib/content';

function TabDiv({ title, text }: { title: string; text: string }) {
  return (
    <div className="w-full overflow-hidden border border-zinc-400 relative h-[350px] rounded-2xl p-6 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-zinc-300">
      <p className="mb-2">{title}</p>
      <p className="text-xl font-normal text-zinc-700">{text}</p>
    </div>
  );
}

export function ProjectsTabs() {
  const content = projectsTabsContent.map((tab) => {
    return {
      title: tab.title,
      value: tab.title,
      content: <TabDiv title={tab.title} text={tab.text} />,
    };
  });

  return (
    <div className="h-[400px] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-screen flex-1 items-start justify-start mt-6 mb-40">
      <Tabs tabs={content} />
    </div>
  );
}
