import { PodcastType } from "@/src/types";
import Image from "next/image";
import React from "react";

const PodcastCardLg = ({
  host,
  title,
  imgURL,
  podcastId,
}: PodcastType) => {
  return (
    <div className="cursor-pointer w-[150px] lg:w-[200px] h-[220px] lg:h-[300px] rounded-lg mt-5 bg-white-1">
      <div className="flex flex-col w-full gap-2 pb-2 ">
        <Image
          src={imgURL|| "" }
          alt='podcast Image'
          width={100}
          height={100}
          className="aspect-square object-fit w-full h-1/2 rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center text-center">
        <h1 className="font-bold text-14 md:text-16 mt-1 truncate">{title}</h1>
        <p className="text-blue-700 truncate">{host}</p>
      </div>
      
    </div>
  );
};

export default PodcastCardLg;
