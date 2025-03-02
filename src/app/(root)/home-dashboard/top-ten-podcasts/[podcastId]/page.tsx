"use client";
import React from "react";

import { notFound, useParams } from "next/navigation";
import { useGetTopTenPodcastsDetailsQuery } from "@/src/lib/features/api/apiSlice";

import { bgImageId } from "@/src/constants";
import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";

const NoteworthyTopTenPodcastsDetail = () => {
  const params = useParams<{ podcastId: string }>();

  const { data: podcasts, isLoading, isError } = useGetTopTenPodcastsDetailsQuery();
  console.log(podcasts);

  const podcast = podcasts?.getMultiplePodcastSeries.find(
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
        bgImage={"url(/assets/background_pattern3.png)"}
      />
      <PodcastPlayEpisodes episodes={podcast.episodes} />
    </div>
  );
};

export default NoteworthyTopTenPodcastsDetail;
