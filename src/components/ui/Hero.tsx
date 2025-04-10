'use client'
import React, { useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import { motion } from "motion/react";


const Hero = () => {
  const [ isLoading, setIsLoading ] = useState(false);

  const firstHeroPhrase = "Create Captivating Podcasts with AI";
  const firstHeroPhraseTextSplit = firstHeroPhrase.split("");
  
  const secondHeroPhrase = "Listen to Great Content";
  const secondHeroPhraseTextSplit = secondHeroPhrase.split("");

  const thirdHeroPhrase =
    " PODCASTING is a podcast creation and streaming platform.";
  const thirdHeroPhraseTextSplit = thirdHeroPhrase.split("");


  const variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
     
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen text-center"
    >
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        className="font-bold text-xl md:text-4xl text-white-1"
        transition={{
          staggerChildren: 0.02
        }}
        >
          {firstHeroPhraseTextSplit.map((char, index) => {
            return (
              <motion.span
                variants={variants}
                key={index}
                transition={{duration: 0.5 }}
              >
                {char}
              </motion.span>
            );
          })}
      </motion.h1>
      <motion.h1 
         className="font-bold text-xl md:text-4xl text-white-1 my-2"
         initial="hidden" 
         whileInView="visible"
         transition={{staggerChildren: 0.035}}
       >
        {secondHeroPhraseTextSplit.map((char, index) => {
          return (
            <motion.span
              variants={variants}
              key={index}
              transition={{ duration: 0.35}}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.04}}
        className="text-white-2  lg:text-2xl px-8"
        
      >
       {thirdHeroPhraseTextSplit.map((char, index) => {
        return(
          <motion.span
            variants={variants}
            key={index}
            transition={{ duration: 0.35}}
          >
            {char}
          </motion.span>
        )
       })}
      </motion.p>
        <Button
          className="bg-gold-1 w-44 rounded-3xl mt-5 duration-300 active:scale-90"
          variant={"outline"}
          asChild
          onClick={() => setIsLoading(true)}
          disabled={isLoading}
        >
          <Link href="/sign-up">
              Get Started
          </Link>
        </Button>
    </div>
  );
};

export default Hero;
