'use client'
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";


const CreateSection = () => {
  const [isLoading, setIsLoading ] = useState(false);
  return (
    <div className="flex w-full bg-black-1 p-4">
      <div className="flex flex-col justify-start w-full sm:w-[50%] px-2">
        <motion.p 
          className="text-white-4"
          initial={{ opacity: 0, y: 25}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}

          >
            CREATE INTERESTING CONTENT
        </motion.p>
        <motion.div 
          className=" h-2 mt-2 bg-gold-1" 
          initial={{ width: 0, y: 25}}
          whileInView={{ width: "70%", y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} 
        />
        <motion.h1 
          className="text-gold-1 text-3xl mt-8"
          initial={{ opacity: 0, y: 25}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}>
          The Essential Platform to Create Engaging Podcasts
        </motion.h1>
        <motion.div 
          className="flex h-full flex-col place-content-between"
          initial={{ opacity: 0, y: 25}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.2 }}
          viewport={{ once: true }}>
          <p 
           className="text-white-4 text-sm xl:text-lg my-5"
        
           >
            PODCASTING is a new platform designed to help you take advantage of
            a great space to engage with your listeners. We provide a reliable
            tool to help streamline your content creation process.
          </p>

          <Button
            asChild
            className=" bg-gold-1 w-44 rounded-3xl mt-5 m-auto transition-transform duration-500 active:scale-90"
            variant={"outline"}
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            <Link href="/sign-up">Begin</Link>
          </Button>
        </motion.div>
      </div>
      <div className="w-[50%] hidden sm:flex relative rounded-xl overflow-hidden">
        <motion.div 
          className="w-full h-full flex-center my-5"
          initial={{ opacity: 0, y: 25}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }} 
          
        >
          <Image
            src="/assets/podcastPicTwo.svg"
            alt="man podcasting"
            width={100}
            height={100}
            className="object-cover w-[80%] h-[80%] rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CreateSection;
