
import Link from 'next/link';
import React from 'react'
import { easeIn, motion } from 'motion/react';

const ListenToPodcastSection = () => {
  return (
    <div className="w-full h-full bg-listen_bg_image bg-no-repeat bg-cover flex items-center justify-center">
      <motion.div
        className="bg-gold-1/[.4] w-1/3 h-3/5 m-20 flex flex-col items-center p-4 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: easeIn,
        }}
      >
        <div className="h-auto w-[80%] bg-blue-700 text-white-1 text-xs sm:text-lg p-3 sm:p-6 flex items-center justify-center mb-5 lg:mb-10 xl:mb-20 rounded-2xl">
          Stream Podcasts
        </div>
        <p className="text-white-1 text-xs md:text-lg xl:text-2xl mb-10">
          On PODCASTING, enjoy wide-ranging discussions on many topics.
        </p>
        <p className="hidden sm:flex text-white-1 md:text-lg xl:text-2xl overflow-hidden mb-10 2xl:mb-48">
          Topics as varied as sports, crime thrillers, documentaries and many
          more, are waiting for you to discover.
        </p>
        <Link
          href="/sign-up"
          className="hidden xl:flex text-blue-700 text-4xl font-extrabold "
        >
          SIGN UP TODAY
        </Link>
      </motion.div>
    </div>
  );
}

export default ListenToPodcastSection