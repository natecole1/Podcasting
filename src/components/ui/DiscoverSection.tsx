import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const DiscoverSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  bg-black-1">
      <div className="w-full sm:w-[50%] p-8">
        <Image
          src="/assets/podcastPicFour.svg"
          alt="man podcasting"
          width={100}
          height={100}
          className="w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-start w-full sm:w-[50%] px-6 sm:px-4">
        <p className="text-white-4">Delve into new ideas</p>
        <div className="w-10 h-2 mt-2 bg-gold-1" />
        <h1 className="text-white-1 text-3xl mt-8">
          Listen to great documentaries, news briefs & commentary
        </h1>
        <p className="text-white-4 text-sm mt-5">
          On Podcasting, you can also listen to your favorite podcasts as well
          as discover new ones. It is now easier to stay up-to-date.{" "}
        </p>
        <Link href="/sign-up" passHref legacyBehavior>
          <Button className="bg-gold-1 w-[120px] rounded-3xl mt-8">
            Discover
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverSection;
