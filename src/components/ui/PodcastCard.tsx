
import Image from "next/image";
import React from "react";

const PodcastCard = ({
  description,
  title,
  imgURL,
  podcastId,
}: {
  description?: string;
  title?: string;
  imgURL?: string;
  podcastId?: string;
}) => {
  return (
    <div className="cursor-pointer w-[150px] lg:w-[200px] h-[220px] lg:h-[300px] rounded-lg mt-5">
      <div className="flex flex-col w-full gap-2 pb-2 ">
        <Image
          src={imgURL}
          alt='podcast Image'
          unoptimized
          width={0}
          height={0}
          className="aspect-square object-fit w-full h-1/2 rounded-lg"
        />
      </div>
      {/* <div className="flex justify-center text-center">
        <h1 className="font-bold text-white-2 hover:text-white-1 transition-colors duration-300 text-14 md:text-16 mt-1">{title}</h1>
      </div> */}
    </div>
  );
};

export default PodcastCard;
