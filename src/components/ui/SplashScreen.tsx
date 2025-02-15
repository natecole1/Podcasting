import react, { SetStateAction, useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimate } from 'motion/react'


const SplashScreen = ({setIsLoading}: any) => {

  return (
    <div className="bg-[#000] m-auto h-screen flex items-center justify-center">
      <AnimatePresence>
        <motion.h3
          className="text-gold-1 text-lg xl:text-2xl overflow-hidden whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut"}}
         
          onAnimationComplete={() => setIsLoading(false)}
        >
          PODCASTING
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}

export default SplashScreen;