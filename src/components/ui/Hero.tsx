import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="font-bold text-xl md:text-4xl  text-white-1">
        Create Captivating Podcasts.
      </h1>

      <h4 className="text-white-2 font-bold lg:text-2xl">
        Discover Top-rated Shows.
      </h4>
      <Link href="/sign-up" passHref legacyBehavior>
        <Button className="bg-gold-1 w-[120px] rounded-3xl mt-5">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
