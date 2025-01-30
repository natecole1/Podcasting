
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
    <div className="cursor-pointer w-[150px] lg:w-[200px] h-[150px] rounded-lg mt-5 mb-14 lg:mb-28">
      <div className="flex flex-col w-full gap-2 pb-2 ">
        <Image
          src={imgURL}
          alt='podcast Image'
          width={100}
          height={100}
          className="aspect-square object-fit w-full h-1/2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default PodcastCard;
