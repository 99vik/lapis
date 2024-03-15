'use client';

import Link from 'next/link';
import { Tabs } from './ui/tabs';
import { projectsTabsContent } from '@/lib/content';

function TabDiv({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url: string;
}) {
  return (
    <div className="w-full overflow-hidden border border-zinc-400 relative h-[650px] sm:h-fit rounded-2xl p-4 text-3xl font-bold text-black bg-gradient-to-br from-zinc-200 via-white to-zinc-300">
      <p className="mb-3 pb-1 border-b border-zinc-300">{title}</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="h-[240px] w-fit self-center aspect-square bg-zinc-600 rounded-xl flex items-center justify-center">
          <p className="text-xs text-white font-normal">image placeholder</p>
        </div>
        <p className="text-base font-normal text-zinc-700">
          {text}{' '}
          <Link href={url} className="font-semibold underline text-zinc-800">
            Learn more.
          </Link>
        </p>
      </div>
    </div>
  );
}

export function ProjectsTabs() {
  const content = projectsTabsContent.map((tab) => {
    return {
      title: tab.title,
      value: tab.title,
      content: <TabDiv title={tab.title} text={tab.text} url={tab.url} />,
    };
  });

  return (
    <div className="h-fit [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-screen flex-1 items-start justify-start lg:mt-6 mb-16">
      <Tabs tabs={content} />
    </div>
  );
}
