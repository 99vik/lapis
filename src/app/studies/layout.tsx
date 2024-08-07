'use client';

import StudiesNav from '@/components/StudiesNav';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

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

  // unpredictable scroll behaviour, next.js bug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <DisplayedBreadcrumb path={path} />
      <main className="md:grid md:grid-cols-7 xl:grid-cols-6 md:divide-neutral-600 divide-x bg-black border rounded-xl min-h-[calc(100vh-130px)] mt-2 mx-2 sm:mx-6 lg:mx-14 mb-6">
        <StudiesNav path={path} />
        <div className="col-span-5 space-y-3 py-4 flex flex-col">
          <h1 className="text-3xl font-semibold flex justify-center px-5">
            {path[path.length - 1]}
          </h1>
          <div className="flex-1 flex flex-col gap-6 pt-2 pb-6 px-5 xl:px-10">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
