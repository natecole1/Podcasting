'use client'
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { useState } from "react";


const CreateSection = () => {
  const [isLoading, setIsLoading ] = useState(false);
  return (
    <div className="flex w-full bg-black-1 p-4">
      <div className="flex flex-col justify-start w-full sm:w-[50%] px-2">
        <p className="text-white-4">CREATE INTERESTING CONTENT</p>
        <div className="w-[252px] h-2 mt-2 bg-gold-1" />
        <h1 className="text-gold-1 text-3xl mt-8">
          The Essential Platform to Create Engaging Podcasts
        </h1>
        <div className="flex h-full flex-col place-content-between">
          <p className="text-white-4 text-sm xl:text-lg my-5">
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
        </div>
      </div>
      <div className="w-[50%] hidden sm:flex relative rounded-xl overflow-hidden">
        <div className="w-full h-full">
          <Image
            src="/assets/podcastPicTwo.svg"
            alt="man podcasting"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSection;
