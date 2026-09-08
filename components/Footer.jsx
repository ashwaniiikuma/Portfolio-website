"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='mt-20 dark:text-white'
    >
      {/* BRAND & EMAIL SECTION */}
      <div className='text-center'>
        <Link href="#top" className='mx-auto mb-2 text-2xl font-serif font-semibold inline-block text-gray-900 dark:text-white'>
          Ashwani
        </Link>
        
        <div className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white/80 text-sm sm:text-base'>
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt='Email Icon' 
            className='w-5 sm:w-6'
          />
       <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwaniiikumar1122@gmail.com" 
          target="_blank" rel="noopener noreferrer" className="hover:underline">
          ashwaniiikumar1122@gmail.com
        </a>
        </div>
      </div>

      {/* COPYRIGHT & SOCIAL LINKS */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/20 mx-[10%] mt-12 py-6 text-sm text-gray-600 dark:text-white/70'>
        <p>&copy; 2026 Ashwani Kumar. All rights reserved.</p>
        
        <ul className='flex items-center gap-6 sm:gap-10 justify-center mt-4 sm:mt-0 font-medium'>
          <li>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;