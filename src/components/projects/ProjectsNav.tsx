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

export default function ProjectsNav() {
  const [scientificIsOpen, setScientificIsOpen] = useState(false);
  const [studentIsOpen, setStudentIsOpen] = useState(false);

  return (
    <nav>
      <p>Projects</p>
      <Collapsible
        open={scientificIsOpen}
        onOpenChange={setScientificIsOpen}
        className=""
      >
        <div className="flex items-center">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition',
                  scientificIsOpen && 'rotate-90'
                )}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <p className="whitespace-nowrap">Scientific projects</p>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={studentIsOpen}
        onOpenChange={setStudentIsOpen}
        className=""
      >
        <div className="flex items-center">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <p className="whitespace-nowrap">Student projects</p>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}
