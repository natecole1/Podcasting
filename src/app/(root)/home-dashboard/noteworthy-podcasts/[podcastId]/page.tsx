"use client";
import React from "react";

import { notFound, useParams } from "next/navigation";
import {
  useGetNoteworthyPodcastsDetailsQuery,
} from "@/src/lib/features/api/apiSlice";

import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";

import { bgImageId } from "@/src/constants";

const NoteworthyMultiPodcastsDetail = () => {
  const params = useParams<{ podcastId: string }>();

  const { data: noteworthyPodcastSeries } =
    useGetNoteworthyPodcastsDetailsQuery();

  const podcast = noteworthyPodcastSeries?.getMultiplePodcastSeries.find(p => p.uuid === params.podcastId);
  
  if(!podcast) {
    notFound();
  }
 

  return (
    <div>
      <PodcastPlayHeader name={podcast.name} description={podcast.description} imageUrl={podcast.imageUrl} bgImageId={bgImageId[0]}/>
      <PodcastPlayEpisodes episodes={podcast.episodes} />
    </div>
  );
};

export default NoteworthyMultiPodcastsDetail;
