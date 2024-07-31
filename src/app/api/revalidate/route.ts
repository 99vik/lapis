import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  if (request.headers.get('authorization') !== process.env.API_KEY)
    return Response.json('Unauthorized.');

  revalidatePath('/');
  revalidatePath('/news');
  revalidatePath('/news/[slug]', 'page');
  return Response.json('Posts revalidated.');
}
