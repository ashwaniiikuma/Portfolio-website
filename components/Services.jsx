"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, serviceData } from '@/assets/assets';

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services' 
      className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='text-center mb-2 text-lg font-serif text-gray-700 dark:text-white/80'
      >
        What I offer
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='text-center text-4xl md:text-5xl font-serif text-gray-900 dark:text-white'
      >
        My Services
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='mb-10 mx-auto mt-5 text-center max-w-2xl font-serif text-gray-600 dark:text-white/70'
      >
        I deliver full-stack web solutions using MongoDB, Express.js, React, and Node.js. From responsive front-end UIs to scalable backend APIs, I build fast and secure digital products.
      </motion.p>

      {/* SERVICE CARDS GRID */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.03 }}
            className='border border-gray-400 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-darkHover/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between'
          >
            <div>
              <Image src={icon} alt={title} className='w-10 mt-2' />
              <h3 className='text-lg my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 dark:text-white/70 leading-5'>{description}</p>
            </div>

            <a href={link} className='flex items-center gap-2 text-sm mt-5 text-gray-800 dark:text-white font-medium hover:underline'>
              Read more 
              <Image src={assets.right_arrow} alt='' className='w-4 dark:invert' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;