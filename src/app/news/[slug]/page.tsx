import Post from '@/types/Post';
import dateFormat from 'dateformat';
import { notFound } from 'next/navigation';

export async function fetchPostsData(slug: string) {
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
    slug: post.id.toString(),
  }));

  const post = posts.find(
    (post) => post.title.toLowerCase().replaceAll(' ', '-') === slug
  );
  return post;
}

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
  let posts: Post[] = data.docs;

  return posts.map((post) => ({
    slug: post.title.toLowerCase().replaceAll(' ', '-'),
  }));
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
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
