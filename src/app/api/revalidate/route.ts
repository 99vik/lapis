import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET(request: Request) {
  if (request.headers.get('authorization') !== process.env.API_KEY)
    return Response.json('Unauthorized.');

  revalidateTag('posts');
  revalidatePath('/news');
  return Response.json('Posts revalidated.');
}
