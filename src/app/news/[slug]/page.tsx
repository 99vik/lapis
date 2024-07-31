import MainContentHolder from '@/components/MainContentHolder';
import ScrollToTop from '@/components/ScrollToTop';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { titleToURI } from '@/lib/utils';
import Post from '@/types/Post';
import { notFound } from 'next/navigation';
import postgres from 'postgres';
import dateFormat from 'dateformat';

export async function generateStaticParams() {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
  const posts = (await sql`
    SELECT * FROM posts 
    ORDER BY created_at DESC 
  `) as Post[];

  return posts.map((post) => ({
    slug: titleToURI(post.title),
    content: post.content,
  }));
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
  const posts = (await sql`
      SELECT * FROM posts
      ORDER BY created_at DESC
    `) as Post[];

  const post = posts.find((post) => {
    return titleToURI(post.title) === slug;
  });

  if (!post) return notFound();
  return (
    <>
      <ScrollToTop />
      <DisplayedBreadcrumb path={['News', post.title]} />
      <MainContentHolder title={post.title}>
        <div className="px-4 sm:px-6 flex flex-col flex-1">
          <p className="flex-1">{post.content}</p>
          <p className="text-neutral-400 text-sm w-full text-right">
            {dateFormat(post.created_at, 'd. mmmm yyyy.')}
          </p>
        </div>
      </MainContentHolder>
    </>
  );
}
