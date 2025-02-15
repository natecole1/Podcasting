"use client";
import React from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useGetTopTechPodcastsDetailsQuery } from "@/src/lib/features/api/apiSlice";

const NoteworthyTopTenPodcastsDetail = () => {
  const params = useParams<{ podcastId: string }>();

 const { data: techPodcasts, isLoading } = useGetTopTechPodcastsDetailsQuery();


  const podcast = techPodcasts?.getMultiplePodcastSeries.find(
    (p) => p.uuid === params.podcastId
  );

  if (!podcast) {
    notFound();
  }

  return (
    <div className="text-white-1 bg-black-1 w-full h-screen">
      <Image
        src={podcast.imageUrl}
        alt="podcast image"
        width={80}
        height={80}
        className=" min-w-20 rounded-lg hover:shadow-custom-sm-light hover:-translate-y-1 duration-300 ease-in"
      />
    </div>
  );
};

export default NoteworthyTopTenPodcastsDetail;
