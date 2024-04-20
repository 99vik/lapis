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
            <BreadcrumbPage>{link}</BreadcrumbPage>
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
            <BreadcrumbLink href={prevPath}>{link}</BreadcrumbLink>
          </BreadcrumbItem>
        </>
      );
    }
  });
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem key="home">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {BreadcrumpPath}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
