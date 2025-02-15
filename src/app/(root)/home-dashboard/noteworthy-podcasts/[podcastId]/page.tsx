"use client";
import React from "react";

import { notFound, useParams } from "next/navigation";
import {
  useGetNoteworthyPodcastsDetailsQuery,

} from "@/src/lib/features/api/apiSlice";

import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";

const NoteworthyMultiPodcastsDetail = () => {
  const params = useParams<{ podcastId: string }>();

  const { data: noteworthyPodcastSeries, isLoading } =
    useGetNoteworthyPodcastsDetailsQuery();
  console.log(noteworthyPodcastSeries);

  const podcast = noteworthyPodcastSeries?.getMultiplePodcastSeries.find(p => p.uuid === params.podcastId);
  
  if(!podcast) {
    notFound();
  }

  return (
    <div>
      <PodcastPlayHeader />
      <PodcastPlayEpisodes />
    </div>
  );
};

export default NoteworthyMultiPodcastsDetail;
