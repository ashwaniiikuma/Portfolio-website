"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, infoList, toolsData } from '@/assets/assets';

const About = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-serif text-gray-700 dark:text-white/80'
      >
        Introduction
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-serif text-gray-900 dark:text-white'
      >
        About me
      </motion.h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        
        {/* PROFILE IMAGE WITH SCALING */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-55 md:w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl object-cover shadow-lg'/>
        </motion.div>

        {/* DETAILS SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-serif text-gray-600 dark:text-white/80 leading-relaxed'>
            I am a dedicated MERN Stack Developer with hands-on experience in creating full-stack web applications. I specialize in building responsive front-end interfaces using React and Next.js, backed by secure Node.js APIs and efficient MongoDB databases.
          </p>

          {/* INFO CARDS */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li 
                whileHover={{ scale: 1.03 }}
                className='border-[0.5px] border-gray-400 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-darkHover/50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] transition-all'
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 dark:text-white/70 text-sm'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* TOOLS SECTION */}
          <h4 className='my-6 text-gray-700 dark:text-white/80 font-serif'>Tools I use</h4>
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='flex items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li 
                whileHover={{ y: -5 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-darkHover/40 transition-all duration-300'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;