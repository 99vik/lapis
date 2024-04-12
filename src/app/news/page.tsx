import Post from '@/types/Post';
import dateFormat from 'dateformat';

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
  let posts: Post[] = data.docs.slice(0, 6);
  posts = posts.map((post) => ({
    ...post,
    date: dateFormat(new Date(post.createdAt), 'd. mmmm yyyy.'),
  }));

  return (
    <main className="flex items-center justify-center py-6">
      <div className="bg-background flex flex-col px-6 py-4 border rounded-xl w-[900px]">
        <div>
          <h1 className="text-3xl font-bold">News</h1>
          <p className="text-neutral-400">Latest laboratory news and events</p>
        </div>
        <div className="w-full h-[1px] bg-neutral-700 my-2" />
        <div className="divide-y">
          {posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
