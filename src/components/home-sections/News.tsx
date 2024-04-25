import Post from '@/types/Post';
import { HoverEffect } from '../ui/card-hover-effect';
import dateFormat from 'dateformat';
import Link from 'next/link';

export default async function News() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    method: 'GET',
    headers: {
      authorization: `${process.env.API_KEY}`,
    },
  });

  const data = await response.json();
  let posts: Post[];
  if (data.docs) {
    posts = data.docs.slice(0, 6);
    posts = posts.map((post) => ({
      ...post,
      date: dateFormat(new Date(post.createdAt), 'd. mmmm yyyy.'),
    }));
  } else {
    posts = [
      {
        id: 0,
        title: 'slug',
        content: 'slug',
        createdAt: String(new Date()),
        date: String(new Date()),
      },
    ];
  }

  return (
    <section className="sm:px-14 mx-2 xl:mx-auto xl:w-[1200px] flex flex-col items-center py-12 bg-black mt-10 mb-16 border rounded-xl">
      <Link href="/news" className="hover:underline">
        <h2 className="text-2xl ">Latest news</h2>
      </Link>
      <div className="h-[1px] my-2 bg-white/30 w-full" />
      <HoverEffect items={posts} />
    </section>
  );
}
