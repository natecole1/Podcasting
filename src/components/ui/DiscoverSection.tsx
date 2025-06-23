'use client'
import { Button } from "./button";
import { useRef, useState } from "react";
import { useScroll, useTransform } from 'motion/react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const DiscoverSection = () => {
  const [isLoading, setIsLoading ] = useState(false);
  
 
  return (
    <div
      className="flex flex-col sm:flex-row w-full bg-black-1 py-6 "
    >
      <div className="w-full sm:w-[50%] sm:flex overflow-hidden my-5">
        <motion.div 
          className="w-full h-full flex-center my-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          >
          <Image
            src="/assets/podcastPicFour.svg"
            alt="man podcasting"
            width={100}
            height={100}
            className="w-[80%] h-[80%] object-cover rounded-xl"
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-start w-full sm:w-[50%] p-6">
        <motion.p 
          className="text-white-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          DELVE INTO NEW IDEAS
        </motion.p>
        <motion.div 
        className="h-2 mt-2 bg-gold-1"
        initial={{ width: 0, y: 25 }}
        whileInView={{ width: "55%", y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        />
        <motion.h1 
         className="text-white-1 text-3xl mt-8"
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.4 }}>
          Listen to Great Documentaries, News Briefs, Commentary & Much More
        </motion.h1>
        <motion.div 
         className="flex flex-col h-full place-content-between"
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.6, staggerChildren: 0.2 }}
         viewport={{ once: true }}>
          <p className="text-white-4 text-sm xl:text-lg my-5">
            On PODCASTING, you can also listen to your favorite podcasts as well
            as discover new ones. It is now easier to stay up-to-date with the
            latest content.
          </p>

          <Button
            asChild
            className=" bg-gold-1 w-44 rounded-3xl mt-5 m-auto transition-transform duration-500 active:scale-90"
            variant={"outline"}
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            <Link href="/sign-up">Discover</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverSection;
