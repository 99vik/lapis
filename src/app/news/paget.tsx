import MainContentHolder from '@/components/MainContentHolder';
import DisplayedBreadcrumb from '@/components/breadcrumb';
import { titleToURI } from '@/lib/utils';
import Post from '@/types/Post';
import dateFormat from 'dateformat';
import { ArrowUpRightFromSquare } from 'lucide-react';
import Link from 'next/link';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const pageSize = 4;

  const response = await fetch(
    `${process.env.CMS_URI}?page=${page}&limit=${pageSize}`,
    {
      method: 'GET',
      headers: {
        authorization: `${process.env.API_KEY}`,
      },
    }
  );

  const data = await response.json();
  let posts: Post[] = data.docs;
  const totalPosts = data.totalDocs;
  const totalPages = Math.ceil(totalPosts / pageSize);

  posts = posts.map((post) => ({
    ...post,
    date: dateFormat(new Date(post.createdAt), 'd. mmmm yyyy.'),
  }));

  return (
    <>
      <DisplayedBreadcrumb path={['News']} />
      <MainContentHolder
        title="News"
        subtitle="Latest laboratory news and events"
      >
        <div className="divide-y px-4 sm:px-8">
          {posts.map((post) => (
            <article key={post.id} className="py-4">
              <div className="w-fit ">
                <Link
                  scroll={true}
                  href={`/news/${titleToURI(post.title)}`}
                  className="hover:underline text-xl flex gap-2 items-start sm:text-xl font-semibold"
                >
                  <ArrowUpRightFromSquare
                    className="min-w-[15px] mt-2 aspect-square"
                    size={12}
                    strokeWidth={3}
                  />
                  {post.title}
                </Link>
              </div>
              <p className="text-lg line-clamp-2 sm:text-base my-4 text-neutral-200">
                {post.content}
              </p>
              <p className="text-neutral-400 text-sm w-full text-right">
                {post.date}
              </p>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`/news?page=${page > 1 ? page - 1 : 1}`}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href={`/news?page=${i + 1}`}
                    isActive={page === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href={`/news?page=${
                    page < totalPages ? page + 1 : totalPages
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </MainContentHolder>
    </>
  );
}
