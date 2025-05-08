'use client'
import React, { useState } from "react";
import { Button } from "./button";
import Link from "next/link";



const Hero = () => {
  const [ isLoading, setIsLoading ] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center">
      <h1 className="font-bold text-xl md:text-4xl text-white-1">
        Create Captivating Podcasts with AI
      </h1>
      <h1 className="font-bold text-xl md:text-4xl text-white-1">Listen to Great Content</h1>

      <p className="text-white-2  lg:text-2xl px-8">
        PODCASTING is a podcast creation and streaming platform.
      </p>
      <Button
        className="bg-gold-1 w-44 rounded-3xl mt-5 duration-300 active:scale-90"
        variant={"outline"}
        asChild
        onClick={() => setIsLoading(true)}
        disabled={isLoading}
      >
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
};

export default Hero;
