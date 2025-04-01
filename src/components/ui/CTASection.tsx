import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { useState } from "react";

const CTASection = () => {
  const [isLoading, setIsLoading ] = useState(false);

  return (
    <div className="w-full h-auto relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Button
          asChild
          className="border-black-7 hover:bg-gold-1 w-44 rounded-3xl mt-5 transition-transform duration-500 active:scale-90"
          variant={"outline"}
          onClick={() => setIsLoading(true)}
          disabled={isLoading}
        >
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
      <Image
        src="/assets/podcastPicSix.svg"
        alt="Woman listening to podcast"
        width="0"
        height="0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CTASection;
