'use client'
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


const BrowseSection = () => {
  const [isLoading, setIsLoading ] = useState(false);

  return (
    <div className="flex bg-black-1 p-6">
      <div className="flex flex-col justify-start w-full sm:w-[50%] my-10">
        <motion.p 
         className="text-white-4"
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.4 }}
         viewport={{ once: true }}
         >
          GROW YOUR BRAND</motion.p>
        <motion.div 
          className="w-40 h-2 mt-2 bg-gold-1" 
          initial={{ width: 0, y: 25 }}
          whileInView={{ width: "45%", y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}  
        />
        <motion.h1 
          className="text-gold-1 text-3xl mt-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}>
          Reach a Broader Range of Listeners and Increase Your Audience
        </motion.h1>
        <motion.div 
          className="flex flex-col h-full place-content-between"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white-4 text-sm xl:text-lg my-5">
            Podcasting is a new platform designed to help you take advantage of
            a great space to engage with your listeners. Create interesting
            content and allow listeners to find you.
          </p>
          <Button
            asChild
            className=" bg-gold-1 w-44 rounded-3xl mt-5 m-auto transition-transform duration-500 active:scale-90"
            variant={"outline"}
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            <Link href="/sign-up">Create</Link>
          </Button>
        </motion.div>
      </div>
      <div className="w-[50%] hidden sm:flex relative rounded-xl overflow-hidden">
        <motion.div 
          className="w-full h-full flex-center my-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}>
          <Image
            src="/assets/podcastPicFive.svg"
            alt="man podcasting"
            width={100}
            height={100}
            className="rounded-xl w-[80%] h-[80%] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BrowseSection;
