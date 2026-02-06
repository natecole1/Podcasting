import React from 'react'
import  Image  from 'next/image'
import { motion } from 'framer-motion'

const ListenOverviewSection = () => {
  return (
    <div className="flex w-full">
      <div className="w-[50%] hidden sm:flex">
        <Image
          src="/assets/ListeningToPodcast.svg"
          alt="Listening to podcast"
          width={100}
          height={250}
          className="w-full"
        />
      </div>
      <div className="w-full sm:w-[50%] bg-black-1 p-4 ">
        <div className="flex flex-col h-full justify-start px-2">
          <motion.p
            className="text-white-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            EXPLORE GREAT CONTENT
          </motion.p>
          <motion.div
            className="h-1 mt-2 bg-gold-1"
            initial={{ width: 0, y: 25 }}
            whileInView={{ width: "65%", y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.h1
            className="text-gold-1 text-3xl mt-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Enrich Your Day With Great Discussions on PODCASTING.
          </motion.h1>
          <motion.div
            className="flex flex-col h-full mt-10 place-content-between"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, staggerChildren: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white-4 text-sm 2xl:text-2xl py-4">
              PODCASTING provides you with pleasant and seamless streaming
              experience. You can find and listen to a diverse range of topics.
            </p>
            <p className="text-white-4 text-sm 2xl:text-2xl py-4">
              Browse your favorite podcasts on PODCASTING. Listen to shows like
              Smartless, Unnatural Causes, The Oprah Podcast, Crime Junkie and
              more.
            </p>
            <h4 className="text-red-500 text-lg 2xl:text-2xl text-center">
              TRY PODCASTING
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ListenOverviewSection