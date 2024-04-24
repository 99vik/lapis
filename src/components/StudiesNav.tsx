import { cn, titleToURI } from '@/lib/utils';
import Link from 'next/link';

export default function StudiesNav({ path }: { path: string[] }) {
  return (
    <nav className="divide-y items-center space-y-2 border-b-2 border-white md:border-none py-4 col-span-2 xl:col-span-1">
      <Link
        href="/studies"
        className={cn(
          'text-base block pb-1 px-6',
          path.slice(-1)[0] === 'Studies' ? 'underline' : 'sm:hover:underline'
        )}
      >
        Studies
      </Link>

      <Link
        href="/studies/study-of-mechatronics-and-robotics"
        className={cn(
          'text-base block px-6 pt-3 pb-1',
          path.slice(-1)[0] === 'Study of mechatronics and robotics'
            ? 'underline'
            : 'sm:hover:underline'
        )}
      >
        Study of mechatronics and robotics
      </Link>
      <Link
        href="/studies/graduate-studies"
        className={cn(
          'text-base block px-6 pt-3',
          path.slice(-1)[0] === 'Graduate studies'
            ? 'underline'
            : 'sm:hover:underline'
        )}
      >
        Graduate studies
      </Link>
    </nav>
  );
}
