import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center">
      <h1 className="font-bold text-xl md:text-4xl text-white-1">
        Create Captivating Podcasts.
      </h1>
      <h1 className="font-bold text-xl md:text-4xl text-white-1 my-2">
        Listen to Great Content.
      </h1>

      <p className="text-white-2  lg:text-2xl px-8">
        PODCASTING is a podcast creation and streaming platform.
      </p>
      <Link href="/sign-up" passHref legacyBehavior>
        <Button className="bg-gold-1 w-[120px] rounded-3xl mt-5">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
