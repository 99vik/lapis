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
    <main className="flex flex-col items-center justify-center mx-2 sm:mx-0 mt-2 mb-8 min-h-[calc(100vh-88px-225px)] sm:min-h-[calc(100vh-72px-125px)]">
      <div className="bg-black flex-1 flex flex-col py-4 border rounded-xl max-w-[900px]">
        <div className="px-4 sm:px-8 text-center">
          <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-neutral-400">{subtitle}</p>}
        </div>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        {children}
      </div>
    </main>
  );
}
