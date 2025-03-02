'use client'
import React from "react";

import { notFound, useParams } from "next/navigation";
import { useGetPodcastSeriesDetailsQuery } from "@/src/lib/features/api/apiSlice";

import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";

import { bgImageId } from "@/src/constants";

const NoteworthySinglePodcastDetail = () => {


  const { data: podcastSeries } = useGetPodcastSeriesDetailsQuery();
  

  const podcast = podcastSeries?.getPodcastSeries
  console.log(podcast)

  if (!podcast) {
    notFound();
  }

  return (
    <div>
      <PodcastPlayHeader
        name={podcast.name}
        description={podcast.description}
        imageUrl={podcast.imageUrl}
        bgImage={"url(/assets/background_pattern2.png)"}
      />
      <PodcastPlayEpisodes episodes={podcast.episodes} />
    </div>
  );
};

export default NoteworthySinglePodcastDetail;



