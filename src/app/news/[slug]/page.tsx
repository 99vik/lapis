import { createContentURI, fetchPostsData } from '@/lib/utils';
import Post from '@/types/Post';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    next: {
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
      slug: createContentURI(post.title),
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
    <main className="flex flex-col items-center w-full px-3 min-h-[calc(100vh-88px-225px)] sm:min-h-[calc(100vh-72px-125px)]">
      <div className="bg-black px-6 my-2 sm:my-6 flex flex-col py-4 border rounded-xl w-full flex-1 max-w-[900px]">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        <p className="text-lg flex-1">{post.content}</p>
        <p className="text-neutral-400 text-sm w-full text-right">
          {post.date}
        </p>
      </div>
    </main>
  );
}
