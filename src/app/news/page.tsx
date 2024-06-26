import DisplayedBreadcrumb from '@/components/breadcrumb';
import { titleToURI } from '@/lib/utils';
import Post from '@/types/Post';
import dateFormat from 'dateformat';
import { ArrowUpRightFromSquare } from 'lucide-react';
import Link from 'next/link';

export default async function Page() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    method: 'GET',
    headers: {
      authorization: `${process.env.API_KEY}`,
    },
  });

  const data = await response.json();
  let posts: Post[] = data.docs;
  posts = posts.map((post) => ({
    ...post,
    date: dateFormat(new Date(post.createdAt), 'd. mmmm yyyy.'),
  }));

  return (
    <>
      <DisplayedBreadcrumb path={['News']} />
      <main className="flex items-center justify-center mx-2 sm:mx-0 mt-2 mb-8">
        <div className="bg-black flex flex-col py-4 border rounded-xl w-[900px]">
          <div className="px-4 sm:px-8 text-center">
            <h1 className="text-4xl font-bold">News</h1>
            <p className="text-neutral-400">
              Latest laboratory news and events
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-600 my-2" />
          <div className="divide-y px-4 sm:px-8">
            {posts.map((post) => (
              <article key={post.id} className="py-4">
                <div className="w-fit ">
                  <Link
                    scroll={true}
                    href={`/news/${titleToURI(post.title)}`}
                    className="hover:underline text-xl flex gap-2 items-center sm:text-xl font-semibold"
                  >
                    {post.title}
                    <ArrowUpRightFromSquare
                      className="min-w-[15px] aspect-square"
                      size={15}
                      strokeWidth={3}
                    />
                  </Link>
                </div>
                <p className="text-lg line-clamp-2 sm:text-base my-4 text-neutral-200">
                  {post.content}
                </p>
                <p className="text-neutral-400 text-sm w-full text-right">
                  {post.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
