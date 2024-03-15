import Link from 'next/link';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { projectsInfiniteCardsContent } from '@/lib/content';

export default function Projects() {
  return (
    <div className="flex shadow-[0_0px_30px_20px_rgba(24,24,27,0.6)] flex-col overflow-hidden rounded-3xl bg-zinc-900/60 border mb-32 gap-4 items-center py-8 px-4 sm:px-6 md:w-[80%] max-w-screen-xl mx-3 md:mx-auto">
      <Link href="/projects" className="hover:underline">
        <h2 className="text-2xl font-bold mb-2">Our projects</h2>
      </Link>
      <InfiniteMovingCards items={projectsInfiniteCardsContent} speed="slow" />
    </div>
  );
}
