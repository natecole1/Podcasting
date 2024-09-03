import Image from "next/image";
import React from "react";

const PodcastCard = ({
  description,
  title,
  imgURL,
  podcastId,
}: {
  description: string;
  title: string;
  imgURL: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2 pb-2">
        <Image
          src={imgURL}
          alt={title}
          width={170}
          height={180}
          className="aspect-square h-fit w-full rounded-[8px]"
        />
      </figure>
      <div className="flex flex-col">
        <h1 className="font-bold text-gold-1 text-18 truncate">{title}</h1>
        <p className="font-normal text-white-2 truncate">{description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
