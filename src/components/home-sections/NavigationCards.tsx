'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '@/../public/img1.jpg';
import Image from 'next/image';

export default function NavigationCards() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardImages = [img1.src, img1.src, img1.src];
  console.log(img1.src);

  const cardDescriptions = [
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: '400px',
    },
    collapsed: {
      width: '200px',
    },
  };

  return (
    <section className="py-16 pb-[300px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white">
          Featured Projects
        </h1>
        <p className="mt-4 text-xl text-gray-300">Check out our latest works</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? 'expanded' : ''
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.5 }}
            onHoverStart={() => handleCardClick(index)}
            onHoverEnd={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">
                  Card {index + 1}
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center">
                    {cardDescriptions[index]}{' '}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
