import revalidatePosts from '@/app/actions';

export async function GET(request: Request) {
  if (request.headers.get('authorization') !== process.env.API_KEY)
    return Response.json('Unauthorized.');

  revalidatePosts();
  return Response.json('Posts revalidated.');
}
