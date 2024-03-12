import Link from 'next/link';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

export default function Projects() {
  const items = [
    {
      body: 'AMICORC will analyze recent research findings in human cognition, cognitive robotics and human robot interaction, and use them as the basis for developing new robot reasoning and interaction strategies. Computational architecture developed in AMICORC could be seen as context-to-data interpreter that endow machines to “reason” based on constantly changing perspectives.',
      title: 'AMICORC Project',
    },
    {
      body: 'Cartesian coordinate robot is a part of the student work where all components are joint together manually and programmed. We use information visualization techniques to additionally control and program the robot. This work is supported by ProEL and RoboDK.',
      title: 'Cartesian coordinate robot project',
    },
    {
      body: 'Focus of this work is an approach in which a robot is using a virtual or inner representation of its own body to ensure a safe and efficient interaction within the physical world. By analyzing correlations within its surroundings, the robot is able to plan task-oriented and socially accepting responses. This approach is inspired by the phenomenon called bodily awareness, which is found in humans.',
      title: 'Bodily awareness control and virtual reality',
    },
    {
      body: 'Focus of this work is an approach in which a robot is using a virtual or inner representation of its own body to ensure a safe and efficient interaction within the physical world. By analyzing correlations within its surroundings, the robot is able to plan task-oriented and socially accepting responses. This approach is inspired by the phenomenon called bodily awareness, which is found in humans.',
      title: 'Mixed reality applications',
    },
    {
      body: 'Projects of our students text',
      title: 'Student projects',
    },
  ];
  return (
    <div className="flex shadow-[0_0px_30px_20px_rgba(24,24,27,0.6)] flex-col overflow-hidden rounded-3xl bg-zinc-900/60 border mb-10 gap-6 items-center py-10 px-4 sm:px-6 md:w-[80%] max-w-screen-xl mx-3 md:mx-auto">
      <h2 className="text-3xl font-bold mb-2">Our projects</h2>
      <InfiniteMovingCards items={items} speed="slow" />
      <Link
        href="/projects"
        className={buttonVariants({
          className: 'text-xl text-zinc-900',
          size: 'lg',
        })}
      >
        Projects
      </Link>
    </div>
  );
}
