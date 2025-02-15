'use client'
import { motion } from 'motion/react';
import React from 'react';


const Template = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (   
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0.8 }}
      >
        {children}
      </motion.div>
  );
}

export default Template