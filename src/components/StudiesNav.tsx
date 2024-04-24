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

export default function StudiesNav() {
  const [scientificIsOpen, setScientificIsOpen] = useState(true);
  const [studentIsOpen, setStudentIsOpen] = useState(true);

  return (
    <nav className="divide-y flex flex-col space-y-2 border-b-2 border-white md:border-none py-4 col-span-2 xl:col-span-1">
      <Link
        href="/projects"
        className={cn('text-base pl-9 sm:hover:underline')}
      >
        About LAPIS projects
      </Link>
      <Link
        href="/projects"
        className={cn('text-base pl-9 sm:hover:underline')}
      >
        About LAPIS projects
      </Link>
    </nav>
  );
}
