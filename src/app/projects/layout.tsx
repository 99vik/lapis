'use client';

import DisplayedBreadcrumb from '@/components/breadcrumb';
import ProjectsNav from '@/components/projects/ProjectsNav';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname()
    .split('/')
    .filter(String)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .map((str) => str.replaceAll('-', ' '));

  return (
    <>
      <DisplayedBreadcrumb path={path} />
      <main className="grid grid-cols-5 divide-neutral-600 divide-x bg-black border rounded-xl min-h-[calc(100vh-130px)] mt-2 mx-14 mb-6">
        <ProjectsNav />
        <div className="col-span-4 space-y-6 py-4 flex flex-col">
          <h1 className="text-3xl font-semibold flex justify-center">
            {path[path.length - 1]}
          </h1>
          <div className="flex-1 flex flex-col gap-6 pt-2 pb-10 px-10">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
