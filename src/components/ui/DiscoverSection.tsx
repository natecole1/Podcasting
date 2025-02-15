import Link from "next/link";
import { Button } from "./button";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { useScroll, useTransform } from 'motion/react';

const DiscoverSection = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start end", "start start"],
   });
   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);


  return (
    <div
      ref={containerRef}
      className="flex flex-col sm:flex-row w-full bg-black-1 p-6"
    >
      <div className="w-full sm:w-[50%] sm:flex relative rounded-xl overflow-hidden">
        <motion.div style={{ scale: imageScale }} className="w-full h-full">
          <Image
            src="/assets/podcastPicFour.svg"
            alt="man podcasting"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-start w-full sm:w-[50%] pt-2 sm:p-4">
        <p className="text-white-4">DELVE INTO NEW IDEAS</p>
        <div className="w-[186px] h-2 mt-2 bg-gold-1" />
        <h1 className="text-white-1 text-3xl mt-8">
          Listen to Great Documentaries, News Briefs, Commentary & Much More
        </h1>
        <div className="flex flex-col h-full place-content-between">
          <p className="text-white-4 text-sm xl:text-lg my-5">
            On PODCASTING, you can also listen to your favorite podcasts as well
            as discover new ones. It is now easier to stay up-to-date with the
            latest content.
          </p>

          <Link href="/sign-up" passHref legacyBehavior>
            <Button className="bg-gold-1 w-[33%] m-auto rounded-3xl duration-300 active:scale-90">
              Discover
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
