import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { titleToURI } from '@/lib/utils';
import { Slash } from 'lucide-react';

export default function DisplayedBreadcrumb({ path }: { path: string[] }) {
  const BreadcrumpPath = path.map((link, index) => {
    const prevPath = path
      .slice(0, path.length - 1)
      .map((path) => `/${titleToURI(path)}`)
      .join('');

    if (index == path.length - 1) {
      return (
        <div
          key={link}
          className="flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5"
        >
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white underline max-w-[160px] sm:max-w-[220px] truncate">
              {link}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </div>
      );
    } else {
      return (
        <div
          key={link}
          className="flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5"
        >
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-zinc-300 max-w-[200px] sm:max-w-[220px] truncate"
              href={prevPath}
            >
              {link}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </div>
      );
    }
  });

  return (
    <Breadcrumb className="w-fit mb-4 mx-4 sm:mx-16">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-zinc-300" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {BreadcrumpPath}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
