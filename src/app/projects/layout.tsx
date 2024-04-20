import DisplayedBreadcrumb from '@/components/breadcrumb';
import ProjectsNav from '@/components/projects/ProjectsNav';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisplayedBreadcrumb path={['Projects']} />
      <main className="grid grid-cols-5 divide-x bg-black border rounded-xl min-h-[calc(100vh-130px)] mt-2 mx-14 mb-6">
        <ProjectsNav />
        <div className="col-span-4">{children}</div>
      </main>
    </>
  );
}
