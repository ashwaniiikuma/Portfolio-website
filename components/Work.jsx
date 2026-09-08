"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { workData, assets } from '@/assets/assets';

const Work = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' 
      className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white'
    >
      {/* SECTION TITLE */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-serif text-gray-700 dark:text-white/80'
      >
        My portfolio
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl md:text-5xl font-serif text-gray-900 dark:text-white'
      >
        My latest work
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-2xl mx-auto text-center mt-5 mb-12 font-serif text-gray-600 dark:text-white/70'
      >
        Welcome to my web development portfolio! Explore a collection of full-stack projects built using the MERN stack (MongoDB, Express, React, Node.js) and Next.js.
      </motion.p>

      {/* WORK / PROJECTS GRID */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5'
      >
        {workData.map((project, index) => (        
          <motion.div   
            key={index} 
            whileHover={{ scale: 1.02 }}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md overflow-hidden'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* White/Dark Card Details Section */}
            <div className='bg-white dark:bg-darkTheme/90 dark:border-white/20 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-100 shadow-md backdrop-blur-sm'>
              <div>
                <h3 className='font-semibold text-sm text-gray-800 dark:text-white'>{project.title}</h3>
                <p className='text-xs text-gray-500 dark:text-white/70 mt-0.5'>{project.description}</p>
              </div>

              {/* Send Icon Box */}
              <div className='border border-black dark:border-white rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 dark:group-hover:bg-lime-400 dark:group-hover:text-black transition duration-300'>
                <Image src={assets.send_icon} alt='send icon' className="w-4 dark:invert group-hover:dark:invert-0"/>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SHOW MORE BUTTON */}
      <motion.a 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        href="#work" 
        className='w-max flex items-center justify-center gap-2 rounded-full text-gray-700 dark:text-white border-[0.5px] border-gray-700 dark:border-white/50 py-3 px-10 mx-auto my-16 hover:bg-gray-100 dark:hover:bg-darkHover transition-all duration-500 font-medium text-sm'
      >
        <span>Show more</span> 
        <Image src={assets.right_arrow_bold} alt="Right arrow" className='w-4 dark:invert'/>
      </motion.a>

    </motion.div>
  );
};

export default Work;