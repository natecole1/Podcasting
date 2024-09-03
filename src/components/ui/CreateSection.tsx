import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const CreateSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black-1 pl-6 pr-6 md:pl-5 md:pr-5 pt-[60px] pb-[60px]">
      <div className="flex flex-col justify-start w-full mr-10 pr-10 pl-10">
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
      <div className="w-full mt-4 lg:w-3/5">
        <Image
          src="/assets/podcastPicTwo.svg"
          alt="man podcasting"
          width="0"
          height="0"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default CreateSection;
