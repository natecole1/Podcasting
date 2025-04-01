'use client'

import Link from "next/link";
import PodcastLogo from "./PodcastLogo";
import { Button } from "./button";
import { useState } from "react";


const Navbar = () => {
  const [isLoading, setIsLoading ] = useState(false)
  return (
    <nav>
      <div className="flex items-center justify-between h-[60px]">
        <div>
          <PodcastLogo />
        </div>
        <div className="hidden sm:flex gap-4 m-3">
          <Button
            asChild
            className=" bg-gold-1 w-44 rounded-3xl mt-5 duration-300 active:scale-90"
            variant={"outline"}
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>

          <Button
            asChild
            className=" w-44 text-white-1 rounded-3xl mt-5 duration-300 active:scale-90 hover:bg-black-1"
            variant={"outline"}
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            <Link href="/sign-in">Log In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
