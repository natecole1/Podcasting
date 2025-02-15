import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="w-full h-auto relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Link href="/sign-up" passHref legacyBehavior>
          <Button className="bg-black-1 hover:bg-black-6 hover:text-white-2 text-gold-1 w-[120px] rounded-3xl mt-8 p-4 animate-smallPing hover:animate-none active:scale-90">
            Get Started
          </Button>
        </Link>
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
