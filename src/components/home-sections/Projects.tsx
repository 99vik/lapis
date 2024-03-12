import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export default function Projects() {
  const items = [
    {
      body: 'teststring',
      title: 'AMICORC Project',
    },
    {
      body: 'teststrinasdasdg',
      title: 'Cartesian coordinate robot project',
    },
    {
      body: 'testsasdasdasdtring',
      title: 'Bodily awareness robot control and virtual reality',
    },
    {
      body: 'teststasdasdring',
      title: 'Mixed reality applications',
    },
    {
      body: 'testsasdasdsadtring',
      title: 'Student projects',
    },
  ];
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl h-screen bg-zinc-900/40 border mb-10 gap-10 items-center py-10 px-4 sm:px-6 md:w-[80%] max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Our projects</h2>
      <InfiniteMovingCards items={items} speed="fast" />
    </div>
  );
}
