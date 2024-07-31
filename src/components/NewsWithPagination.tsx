'use client';

import MainContentHolder from '@/components/MainContentHolder';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn, titleToURI } from '@/lib/utils';
import Post from '@/types/Post';
import dateFormat from 'dateformat';
import { ArrowUpRightFromSquare } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function getPostsForPage({
  posts,
  currentPage,
  pageSize,
}: {
  posts: Post[];
  currentPage: number;
  pageSize: number;
}) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return posts.slice(startIndex, endIndex);
}

export default function NewsWithPagination({
  posts,
  totalPages,
  pageSize,
}: {
  posts: Post[];
  totalPages: number;
  pageSize: number;
}) {
  const params = useSearchParams();
  const page = Number(params.get('page')) || 1;

  const currentPosts = getPostsForPage({
    posts: posts,
    currentPage: page,
    pageSize: pageSize,
  });

  return (
    <MainContentHolder
      title="News"
      subtitle="Latest laboratory news and events"
    >
      <div className="divide-y px-4 sm:px-8">
        {currentPosts.map((post) => (
          <article key={post.id} className="py-2 sm:py-3">
            <div className="w-fit ">
              <Link
                href={`/news/${titleToURI(post.title)}`}
                className="hover:underline flex gap-1 sm:gap-2 items-start sm:text-lg font-semibold"
              >
                <ArrowUpRightFromSquare
                  className="min-w-[15px] mt-2 aspect-square"
                  size={12}
                  strokeWidth={3}
                />
                {post.title}
              </Link>
            </div>
            <p className="text-lg line-clamp-2 sm:text-base my-2 sm:my-4 text-neutral-200">
              {post.content}
            </p>
            <p className="text-neutral-400 text-sm w-full text-right">
              {dateFormat(post.created_at, 'd. mmmm yyyy.')}
            </p>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem className="border-r pr-1">
              <PaginationPrevious
                className={cn(page === 1 && 'pointer-events-none opacity-50')}
                href={`/news?page=${page > 1 ? page - 1 : 1}`}
              />
            </PaginationItem>
            {totalPages > 3
              ? Array.from([page - 1, page, page + 1], (i) => {
                  if (page === 1) i += 1;
                  if (page === totalPages) i -= 1;
                  return (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href={`/news?page=${i}`}
                        isActive={page === i}
                      >
                        {i}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })
              : Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`/news?page=${i + 1}`}
                      isActive={page === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
            <PaginationItem className="border-l pl-1">
              <PaginationNext
                className={cn(
                  page === totalPages && 'pointer-events-none opacity-50'
                )}
                href={`/news?page=${page < totalPages ? page + 1 : totalPages}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </MainContentHolder>
  );
}
