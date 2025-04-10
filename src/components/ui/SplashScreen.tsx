'use client'
import react, {useEffect, useState} from 'react';
import { motion } from 'motion/react'


const SplashScreen = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
      initial: {
        d: initialPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };

  return (
    <motion.div
      key="modal"
      initial={{ top: 0 }}
      animate="initial"
      exit={{
        top: -1000,
        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
      }}
      className="w-full h-screen fixed flex items-center justify-center z-50 bg-black-7"
    >
      {dimension.width > 0 && (
        <div className="w-full flex flex-col items-center justify-center">
          <motion.h1
            className="text-gold-1 text-3xl font-bold xl:text-5xl z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            PODCASTING
          </motion.h1>
          <svg className=" w-full h-svg absolute top-0 left-0">
            <motion.path
            
              variants={curve}
              initial={{
                d: initialPath,
                // transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
              }}
              exit={{
                d: targetPath,
                transition: {  duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
              }}
              className="fill-black-7"
            ></motion.path>
          </svg>
        </div>
      )}
    </motion.div>
  );
}

export default SplashScreen;