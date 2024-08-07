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

export default function ProjectsNav({ path }: { path: string[] }) {
  const [scientificIsOpen, setScientificIsOpen] = useState(true);
  const [studentIsOpen, setStudentIsOpen] = useState(true);

  const projects = {
    scientific: ['Amicorc project', 'Smart lab', 'Mixed reality'],
    student: ['Project1', 'Project2', 'Project3'],
  };

  const scientificProjects = projects.scientific.map((project) => (
    <Link
      key={project}
      href={`/projects/scientific-projects/${titleToURI(project)}`}
      className={cn(
        'px-6 py-2 font-sans rounded-sm',
        path.slice(-1)[0] === project
          ? 'bg-neutral-800'
          : 'sm:hover:bg-neutral-800'
      )}
    >
      {project}
    </Link>
  ));

  const studentProjects = projects.student.map((project) => (
    <Link
      key={project}
      href={`/projects/student-projects/${titleToURI(project)}`}
      className={cn(
        'px-6 py-2 font-sans rounded-sm',
        path.slice(-1)[0] === project
          ? 'bg-neutral-800'
          : 'sm:hover:bg-neutral-800'
      )}
    >
      {project}
    </Link>
  ));

  return (
    <nav className="divide-y space-y-2 border-b-2 border-white md:border-none py-4 col-span-2 xl:col-span-1">
      <Link
        href="/projects"
        className={cn(
          'text-base pl-9',
          path.slice(-1)[0] === 'Projects' ? 'underline' : 'sm:hover:underline'
        )}
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
            className={cn(
              'whitespace-nowrap',
              path.slice(-1)[0] === 'Scientific projects'
                ? 'underline'
                : 'sm:hover:underline'
            )}
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
            className={cn(
              'whitespace-nowrap',
              path.slice(-1)[0] === 'Student projects'
                ? 'underline'
                : 'sm:hover:underline'
            )}
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
