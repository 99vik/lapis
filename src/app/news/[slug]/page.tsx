import MainContentHolder from '@/components/MainContentHolder';
import ScrollToTop from '@/components/ScrollToTop';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { titleToURI, fetchPostsData } from '@/lib/utils';
import Post from '@/types/Post';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    method: 'GET',
    headers: {
      authorization: `${process.env.API_KEY}`,
    },
  });

  const data = await response.json();
  if (data.docs) {
    let posts: Post[] = data.docs;

    return posts.map((post) => ({
      slug: titleToURI(post.title),
    }));
  } else {
    return ['slug'];
  }
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const post = await fetchPostsData(slug);

  if (!post) return notFound();

  return (
    <>
      <ScrollToTop />
      <DisplayedBreadcrumb path={['News', post.title]} />
      <MainContentHolder title={post.title}>
        <div className="px-4 sm:px-6 flex flex-col flex-1">
          <p className="flex-1">{post.content}</p>
          <p className="text-neutral-400 text-sm w-full text-right">
            {post.date}
          </p>
        </div>
      </MainContentHolder>
    </>
  );
}
