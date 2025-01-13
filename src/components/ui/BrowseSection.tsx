import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const BrowseSection = () => {
  return (
    <div className="flex items-center bg-black-1 p-6">
      <div className="flex flex-col justify-start w-full sm:w-[50%]">
        <p className="text-white-4">Grow your brand</p>
        <div className="w-10 h-2 mt-2 bg-gold-1" />
        <h1 className="text-gold-1 text-3xl mt-8">
          Reach a broader range of listeners and increase your audience
        </h1>
        <p className="text-white-4 text-sm mt-5">
          Podcasting is a new platform designed to help you take advantage of a
          great new space to engage with your listeners.{" "}
        </p>
        <Link href="/sign-up" passHref legacyBehavior>
          <Button className="bg-gold-1 w-[120px] rounded-3xl mt-8">
            Explore
          </Button>
        </Link>
      </div>
      <div className="sm:w-[50%] p-8 hidden sm:flex">
        <Image
          src="/assets/podcastPicFive.svg"
          alt="man podcasting"
          width={100}
          height={100}
          className="rounded-xl w-full"
        />
      </div>
    </div>
  );
};

export default BrowseSection;
