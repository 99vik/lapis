'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Plus,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ProjectsNav() {
  const [scientificIsOpen, setScientificIsOpen] = useState(false);
  const [studentIsOpen, setStudentIsOpen] = useState(false);

  return (
    <nav className="space-y-2 p-4">
      <Link href="/projects" className="text-xl">
        Projects
      </Link>
      <div className="w-full h-[1px] bg-neutral-600" />
      <Collapsible
        open={scientificIsOpen}
        onOpenChange={setScientificIsOpen}
        className=""
      >
        <div className="flex items-start justify-start">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="space-x-2 text-base w-full flex justify-start hover:bg-transparent  p-0"
            >
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition',
                  scientificIsOpen && 'rotate-90'
                )}
              />
              <p className="whitespace-nowrap">Scientific projects</p>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col divide-y pl-3 border-l border-white ml-2">
          <Link
            href="/projects"
            className="px-6 hover:bg-neutral-800 p-1 font-mono text-base"
          >
            AMICORN project
          </Link>
          <Link
            href="/projects"
            className="px-6 hover:bg-neutral-800 p-1 font-mono text-base"
          >
            Smart LAB
          </Link>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={studentIsOpen}
        onOpenChange={setStudentIsOpen}
        className=""
      >
        <div className="flex items-start justify-start">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="space-x-2 text-base w-full flex justify-start hover:bg-transparent p-0"
            >
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition',
                  studentIsOpen && 'rotate-90'
                )}
              />
              <p className="whitespace-nowrap">Student projects</p>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col divide-y pl-3 border-l border-white ml-2">
          <Link
            href="/projects"
            className="px-6 hover:bg-neutral-800 p-1 font-mono text-base"
          >
            Project 1 title
          </Link>
          <Link
            href="/projects"
            className="px-6 hover:bg-neutral-800 p-1 font-mono text-base"
          >
            Project 2 title
          </Link>
          <Link
            href="/projects"
            className="px-6 hover:bg-neutral-800 p-1 font-mono text-base"
          >
            Project 3 title
          </Link>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}
