'use client'
import React, { useRef, useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { slideUp, opacity } from "@/src/app/animations/animations";

const Hero = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const firstHeroPhrase = "Create Captivating Podcasts with AI";
  const secondHeroPhrase = "Listen to Great Content";

  const description = useRef(null);
  const isInView = useInView(description);


  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen text-center"
      ref={description}
    >
      <h1 className="font-bold text-xl md:text-4xl text-white-1">
        <motion.span
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          transition={{ staggerChildren: 3}}

        >
          {firstHeroPhrase.split(" ").map((word, index) => {
            return (
              <motion.span
                variants={opacity}
                key={index}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            );
          })}
        </motion.span>
      </h1>
      <h1 className="font-bold text-xl md:text-4xl text-white-1 my-2">
        {secondHeroPhrase.split(" ").map((word, index) => {
          return (
            <motion.span
              variants={opacity}
              key={index}
              custom={index}
              animate={isInView ? "open" : "closed"}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          );
        })}
      </h1>

      <motion.p
        variants={opacity}
        className="text-white-2  lg:text-2xl px-8"
        animate={isInView ? "open" : "closed"}
      >
        PODCASTING is a podcast creation and streaming platform.
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
