import { HoverEffect } from '../ui/card-hover-effect';
import dateFormat from 'dateformat';

interface Post {
  id: number;
  title: string;
  createdAt: string;
}
export default async function News() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    cache: 'no-store',
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
    <section className="px-14 flex flex-col items-center py-6 bg-black mt-10 mb-16 border-t border-b">
      <h2 className="text-2xl ">Latest news</h2>
      <div className="h-[1px] my-2 bg-white/30 w-[930px]" />
      <HoverEffect items={posts} />
    </section>
  );
}
