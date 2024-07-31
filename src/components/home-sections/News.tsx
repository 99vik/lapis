import Post from '@/types/Post';
import postgres from 'postgres';
import { HoverEffect } from '../ui/card-hover-effect';

export default async function News() {
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
