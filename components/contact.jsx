"use client";
import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6bd32ace-0780-4af7-8f32-a3556268cba9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact" 
      className='w-full px-[12%] py-10 scroll-mt-20 dark:text-white'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-3 text-lg font-serif text-gray-700 dark:text-white/80'
      >
        Connect with me
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl md:text-5xl font-serif text-gray-900 dark:text-white'
      >
        Get in touch
      </motion.h2>
    
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-6 mb-12 font-serif text-gray-600 dark:text-white/70'
      >
        Have a project in mind or want to build a full-stack web application? Feel free to reach out for collaborations or opportunities!
      </motion.p>

      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onSubmit={onSubmit} 
        className='max-w-2xl mx-auto'
      >
        {/* Name and Email Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input 
            whileFocus={{ scale: 1.01 }}
            type="text" 
            placeholder='Enter your name' 
            required 
            className='w-full p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50 focus:border-black dark:focus:border-white transition-all'
            name='name'
          />
          <motion.input 
            whileFocus={{ scale: 1.01 }}
            type="email" 
            placeholder='Enter your email' 
            required
            className='w-full p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50 focus:border-black dark:focus:border-white transition-all'
            name='email' 
          />
        </div>

        {/* Textarea */}
        <motion.textarea 
          whileFocus={{ scale: 1.01 }}
          rows='6' 
          placeholder='Enter your message' 
          required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50 focus:border-black dark:focus:border-white mb-6 transition-all'
          name='message'
        ></motion.textarea>

        {/* Styled Submit Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit' 
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white dark:bg-transparent dark:border-[0.5px] dark:border-white/50 dark:hover:bg-darkHover rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'
        >
          Submit now 
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        <p className='mt-4 text-center text-sm font-medium dark:text-white/80'>{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;