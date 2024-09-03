import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const DiscoverSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black-1 pl-6 pr-6 md:pl-5 md:pr-5 pt-[60px] pb-[60px]">
      <div className="w-full mt-4 lg:w-3/5">
        <Image
          src="/assets/podcastPicFour.svg"
          alt="man podcasting"
          width="0"
          height="0"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex flex-col justify-start w-full mr-10 pt-5 pr-10 pl-10">
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
