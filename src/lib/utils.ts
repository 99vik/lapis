import Post from '@/types/Post';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dateFormat from 'dateformat';
import postgres from 'postgres';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleToURI(title: string) {
  return title.trim().toLowerCase().replaceAll(' ', '-');
}

// export async function fetchPostsData(slug: string) {
//   // const response = await fetch(`${process.env.CMS_URI}`, {
//   //   headers: {
//   //     authorization: `${process.env.API_KEY}`,
//   //   },
//   // });

//   const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
//   let posts = (await sql`
//     SELECT * FROM posts
//     ORDER BY created_at DESC
//   `) as Post[];

//   // const data = await response.json();
//   // let posts: Post[] = data.docs;
//   // posts = posts.map((post) => ({
//   //   ...post,
//   //   slug: post.id.toString(),
//   // }));
//   const post = posts.find((post) => {
//     return titleToURI(post.title) === slug;
//   });

//   return post;
// }
