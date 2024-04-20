import DisplayedBreadcrumb from '@/components/breadcrumb';
import ProjectsNav from '@/components/projects/ProjectsNav';

export default function ProjectsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisplayedBreadcrumb path={['Projects']} />
      <main className="grid grid-cols-5 divide-x bg-black border rounded-xl h-[calc(100vh-88px-40px)] sm:h-[calc(100vh-72px-123px)] mt-2 mx-14 mb-6">
        <ProjectsNav />
        <div className="col-span-4">{children}</div>
      </main>
    </>
  );
}
