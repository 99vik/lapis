'use client';

import { cn, titleToURI } from '@/lib/utils';
import Post from '@/types/Post';
import dateFormat from 'dateformat';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: Post[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid px-3 py-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={`/news/${titleToURI(item.title)}`}
          key={item.id}
          className="relative group block p-[5px] h-[130px] w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-[130px] w-full bg-white block  rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDate>{dateFormat(item.created_at, 'd. mmmm yyyy.')}</CardDate>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-xl px-3 py-2 h-[120px] bg-neutral-900 border border-neutral-600 relative z-20',
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="h-full justify-between flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('text-white line-clamp-3 tracking-wide', className)}>
      {children}
    </h4>
  );
};

export const CardDate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        'text-neutral-400 text-sm tracking-wide ml-auto',
        className
      )}
    >
      {children}
    </h4>
  );
};
