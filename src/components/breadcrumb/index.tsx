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
        <>
          <BreadcrumbSeparator key={index}>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem key={index}>
            <BreadcrumbPage className="text-white underline max-w-[160px] sm:max-w-[220px] truncate">
              {link}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </>
      );
    } else {
      return (
        <>
          <BreadcrumbSeparator key={index}>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              className="text-zinc-300 max-w-[200px] sm:max-w-[220px] truncate"
              href={prevPath}
            >
              {link}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </>
      );
    }
  });

  return (
    <Breadcrumb className="w-fit mt-2 mb-4 mx-3 sm:mx-16">
      <BreadcrumbList>
        <BreadcrumbItem key="home">
          <BreadcrumbLink className="text-zinc-300" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {BreadcrumpPath}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
