import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const CreateSection = () => {
  return (
    <div className="flex w-full items-center bg-black-1 p-6">
      <div className="flex flex-col justify-start w-full sm:w-[50%] px-4">
        <p className="text-white-4">Chase the dream</p>
        <div className="w-10 h-2 mt-2 bg-gold-1" />
        <h1 className="text-gold-1 text-3xl mt-8">
          A New Platform to Create Engaging Podcasts
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
      <div className="w-[50%] p-8 hidden sm:flex">
        <Image
          src="/assets/podcastPicTwo.svg"
          alt="man podcasting"
          width={100}
          height={100}
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default CreateSection;
