import MainContentHolder from '@/components/MainContentHolder';
import NewsWithPagination from '@/components/NewsWithPagination';
import DisplayedBreadcrumb from '@/components/breadcrumb';
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
import { Metadata } from 'next';
import Link from 'next/link';
import postgres from 'postgres';

export const metadata: Metadata = {
  title: 'News',
};

export default async function Page() {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
  const posts = (await sql`
    SELECT * FROM posts 
    ORDER BY created_at DESC 
    `) as Post[];

  const totalPosts = posts.length;
  const pageSize = 5;
  const totalPages = Math.ceil(totalPosts / pageSize);

  return (
    <>
      <DisplayedBreadcrumb path={['News']} />
      <NewsWithPagination
        posts={posts}
        totalPages={totalPages}
        pageSize={pageSize}
      />
    </>
  );
}
