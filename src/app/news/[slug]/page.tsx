import ScrollToTop from '@/components/ScrollToTop';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { titleToURI, fetchPostsData } from '@/lib/utils';
import Post from '@/types/Post';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    next: {
      revalidate: 300,
      tags: ['posts'],
    },
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
      <main className="flex flex-col items-center min-h-[calc(100vh-88px-225px)] sm:min-h-[calc(100vh-72px-125px)] mx-2 sm:mx-0 mt-2 mb-8">
        <div className="bg-black flex flex-col py-4 border rounded-xl w-full flex-1 max-w-[900px]">
          <div className="px-4 sm:px-6">
            <h1 className="text-2xl font-semibold text-left">{post.title}</h1>
          </div>
          <div className="w-full h-[1px] bg-neutral-600 my-2" />
          <div className="px-4 sm:px-6 flex flex-col flex-1">
            <p className="flex-1">{post.content}</p>
            <p className="text-neutral-400 text-sm w-full text-right">
              {post.date}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
