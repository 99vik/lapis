import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn, titleToURI } from '@/lib/utils';
import Link from 'next/link';

export default function ProjectsNav() {
  const [scientificIsOpen, setScientificIsOpen] = useState(true);
  const [studentIsOpen, setStudentIsOpen] = useState(true);

  const projects = {
    scientific: ['Amicorn project', 'Smart lab', 'Mixed reality'],
    student: ['Project1', 'Project2', 'Project3', 'Project4'],
  };

  const scientificProjects = projects.scientific.map((project) => (
    <Link
      key={project}
      href={`/projects/scientific-projects/${titleToURI(project)}`}
      className="px-6 sm:hover:bg-neutral-800 p-2 font-sans rounded-sm"
    >
      {project}
    </Link>
  ));

  const studentProjects = projects.student.map((project) => (
    <Link
      key={project}
      href="/projects"
      className="px-6 sm:hover:bg-neutral-800 p-2 font-sans rounded-sm"
    >
      {project}
    </Link>
  ));

  return (
    <nav className="divide-y space-y-2 border-b-2 border-white md:border-none py-4 col-span-2 xl:col-span-1">
      <Link
        href="/projects"
        className={cn('text-base pl-9 sm:hover:underline')}
      >
        About LAPIS projects
      </Link>
      <Collapsible open={scientificIsOpen} onOpenChange={setScientificIsOpen}>
        <div className="flex items-center justify-start">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="space-x-2 text-base aspect-square hover:bg-transparent p-0"
            >
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition',
                  scientificIsOpen && 'rotate-90'
                )}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <Link
            href="/projects/scientific-projects"
            className="whitespace-nowrap sm:hover:underline"
          >
            Scientific projects
          </Link>
        </div>
        <CollapsibleContent className="flex flex-col divide-y border-l border-white ml-[18px]">
          {scientificProjects}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={studentIsOpen}
        onOpenChange={setStudentIsOpen}
        className=""
      >
        <div className="flex items-center justify-start">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="space-x-2 text-base aspect-square hover:bg-transparent p-0"
            >
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition',
                  studentIsOpen && 'rotate-90'
                )}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <Link
            href="/projects/student-projects"
            className="whitespace-nowrap sm:hover:underline"
          >
            Student projects
          </Link>
        </div>
        <CollapsibleContent className="flex flex-col divide-y border-l border-white ml-[18px]">
          {studentProjects}
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}
