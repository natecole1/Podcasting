
import Link from 'next/link';
import React from 'react'
import { easeIn, motion } from 'motion/react';

const ListenToPodcastSection = () => {
  return (
    <div className="w-full h-full bg-listen_bg_image bg-no-repeat bg-cover flex items-center justify-center">
      <motion.div
        className="bg-gold-1/[.4] w-[60%] h-[50%] m-20 flex flex-col items-center p-8 rounded-2xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
       
        <p className=" text-md md:text-xl xl:text-2xl 2xl:text-4xl mb-5">
          On PODCASTING, enjoy wide-ranging discussions on many topics.
        </p>
        <p className="flex  md:text-xl xl:text-2xl 2xl:text-4xl 2xl:mb-48">
          Topics as varied as sports, crime thrillers, documentaries and many
          more, are waiting for you to discover.
        </p>
        <div className="w-full h-full flex justify-center items-end">
          <Link
            href="/sign-up"
            className=" text-blue-700 hover:text-white-2 text-md md:text-xl lg:text-4xl font-bold  "
          >
            SIGN UP TODAY
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ListenToPodcastSection