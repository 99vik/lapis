import Post from '@/types/Post';
import dateFormat from 'dateformat';
import Link from 'next/link';

export default async function Page() {
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
  let posts: Post[] = data.docs;
  posts = posts.map((post) => ({
    ...post,
    date: dateFormat(new Date(post.createdAt), 'd. mmmm yyyy.'),
  }));

  return (
    <main className="flex items-center justify-center py-6">
      <div className="bg-background flex flex-col py-4 border rounded-xl w-[900px]">
        <div className="px-8">
          <h1 className="text-4xl font-bold">News</h1>
          <p className="text-neutral-400">Latest laboratory news and events</p>
        </div>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        <div className="divide-y px-8">
          {posts.map((post) => (
            <article key={post.id} className="py-4">
              <div className="w-fit">
                <Link
                  href={`/news/${post.id}`}
                  className="hover:underline text-xl font-semibold"
                >
                  {post.title}
                </Link>
              </div>
              <p className="font-light my-4 text-neutral-200 px-3">
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
  );
}
