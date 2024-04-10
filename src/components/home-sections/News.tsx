import Post from '@/types/Post';
import { HoverEffect } from '../ui/card-hover-effect';
import dateFormat from 'dateformat';

export default async function News() {
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
    <section className="sm:px-14 mx-auto xl:w-[1200px] flex flex-col items-center py-12 bg-black mt-10 mb-16 border rounded-xl">
      <h2 className="text-2xl ">Latest news</h2>
      <div className="h-[1px] my-2 bg-white/30 w-full" />
      <HoverEffect items={posts} />
    </section>
  );
}
