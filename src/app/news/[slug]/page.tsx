import Post from '@/types/Post';
import dateFormat from 'dateformat';

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
    slug: post.id.toString(),
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;

  console.log(params);
  return <main></main>;
}
