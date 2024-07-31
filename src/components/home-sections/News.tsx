import Post from '@/types/Post';
import dateFormat from 'dateformat';
import { HoverEffect } from '../ui/card-hover-effect';
import postgres from 'postgres';

export default async function News() {
  // const response = await fetch(`${process.env.CMS_URI}`, {
  //   method: 'GET',
  //   headers: {
  //     authorization: `${process.env.API_KEY}`,
  //   },
  // });

  // const data = await response.json();
  // let posts: Post[];
  // if (data.docs) {
  //   posts = data.docs.slice(0, 6);
  //   posts = posts.map((post) => ({
  //     ...post,
  //     date: dateFormat(new Date(post.createdAt), 'd. mmmm yyyy.'),
  //   }));
  // } else {
  //   posts = [
  //     {
  //       id: 0,
  //       title: 'slug',
  //       content: 'slug',
  //       createdAt: String(new Date()),
  //       date: String(new Date()),
  //     },
  //   ];
  // }

  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
  const posts = (await sql`
    SELECT * FROM posts 
    ORDER BY created_at DESC 
    LIMIT 6
  `) as Post[];

  return (
    <main className="flex flex-col items-center justify-center mx-2 sm:mx-0 mt-2 mb-8">
      <div className="bg-black flex-1 flex flex-col py-4 border rounded-xl w-full max-w-[900px]">
        <div className="px-4 sm:px-8 text-center">
          <h1 className="text-xl md:text-3xl font-bold">Latest news</h1>
        </div>
        <div className="w-full h-[1px] bg-neutral-600 my-2" />
        <HoverEffect items={posts} />
      </div>
    </main>
  );
}
