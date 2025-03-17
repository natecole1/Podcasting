"use client";
import React from "react";

import { notFound, useParams } from "next/navigation";
import { useGetTopTechPodcastsDetailsQuery } from "@/src/lib/features/api/apiSlice";

import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";

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
    <div>
      <PodcastPlayHeader
        name={podcast.name}
        description={podcast.description}
        imageUrl={podcast.imageUrl}
        bgImage={"url(/assets/background_pattern1.png)"}
      />
      <PodcastPlayEpisodes 
        episodes={podcast.episodes} 
        name={podcast.name}
        imageUrl={podcast.imageUrl}
      />
    </div>
  );
};

export default NoteworthyTopTenPodcastsDetail;
