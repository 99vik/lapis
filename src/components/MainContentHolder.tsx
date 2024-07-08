import { ReactNode } from 'react';

export default function MainContentHolder({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="flex items-center justify-center mx-2 sm:mx-0 mt-2 mb-8">
      <div className="bg-black flex flex-col py-4 border rounded-xl w-[900px]">
        <div className="px-4 sm:px-8 text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          {subtitle && <p className="text-neutral-400">{subtitle}</p>}
        </div>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        {children}
      </div>
    </main>
  );
}
