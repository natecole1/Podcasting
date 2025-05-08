'use client'
import Link from "next/link";
import { Button } from "./button";

import Image from "next/image";
import { useRef, useState } from "react";

import { useScroll, useTransform } from 'motion/react';

const DiscoverSection = () => {
  const [isLoading, setIsLoading ] = useState(false);
  
 
  return (
    <div
      className="flex flex-col sm:flex-row w-full bg-black-1 py-6 "
    >
      <div className="w-full sm:w-[50%] sm:flex overflow-hidden my-5">
        <div className="w-full h-full flex-center my-10">
          <Image
            src="/assets/podcastPicFour.svg"
            alt="man podcasting"
            width={100}
            height={100}
            className="w-[80%] h-[80%] object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start w-full sm:w-[50%] p-6">
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

          <Button
            asChild
            className=" bg-gold-1 w-44 rounded-3xl mt-5 m-auto transition-transform duration-500 active:scale-90"
            variant={"outline"}
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            <Link href="/sign-up">Discover</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
