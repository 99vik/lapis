'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '@/../public/img1.jpg';
import projectsImg from '@/../public/projectExp.jpg';
import studiesImg from '@/../public/studiesExp.jpg';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

export default function NavigationCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const desktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  function handleCardHover(index: number) {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  }

  const cardContent = [
    {
      imgSrc: studiesImg.src,
      title: 'Studies',
      links: [
        {
          name: 'Study of mechatronics and robotics',
          href: '/studies/study-of-mechatronics-and-robotics',
        },
        {
          name: 'Graduate studies',
          href: '/studies/graduate-studies',
        },
      ],
    },
    {
      imgSrc: projectsImg.src,
      title: 'Projects',
      links: [
        {
          name: 'Scientific projects',
          href: '/projects/scientific-projects',
        },
        {
          name: 'Student projects',
          href: '/projects/student-projects',
        },
      ],
    },
    {
      imgSrc: img1.src,
      title: 'LAPIS',
      links: [
        {
          name: 'Gallery',
          href: '/gallery',
        },
        {
          name: 'About',
          href: '/about',
        },
        {
          name: 'Contact',
          href: '/contact',
        },
      ],
    },
  ];

  const cardVariants = {
    expanded: {
      width: '520px',
    },
    collapsed: {
      width: '320px',
    },
  };

  const heightVariants = {
    expanded: {
      height: '150px',
    },
    collapsed: {
      height: '45px',
    },
  };

  return (
    <section className="sm:py-10 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={cn(
              'card h-[360px] my-1 md:my-0 md:h-[440px] bg-cover bg-center rounded-[20px] border',
              index === expandedIndex && 'expanded'
            )}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.4 }}
            onHoverStart={() => {
              if (isDesktop) handleCardHover(index);
            }}
            onHoverEnd={() => setExpandedIndex(-1)}
            style={{
              backgroundImage: `url(${cardContent[index].imgSrc})`,
            }}
          >
            <div className="card-content h-full overflow-hidden flex flex-col justify-end">
              <motion.div
                variants={heightVariants}
                initial="collapsed"
                animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                transition={{ duration: 0.4 }}
                className={cn(
                  'card-footer max-md:min-h-[135px] rounded-b-[20px] bg-black/60 flex flex-col items-center justify-start pt-1 pb-4'
                )}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {cardContent[index].title}
                </h2>
                <ul
                  className={cn(
                    `text-transparent mt-1 pt-2 md:text-lg px-6 md:px-8 w-full flex flex-col items-center gap-1 list-none transition border-t border-black/0`,
                    (index === expandedIndex || !isDesktop) &&
                      'text-neutral-200 delay-300 border-white/40'
                  )}
                >
                  {cardContent[index].links.map((link) => (
                    <li className="hover:underline w-[300px]" key={link.name}>
                      <Link
                        className="flex justify-center w-full"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
