'use client'
import React from 'react'
import { useGetTopPodcastsByGenresQuery } from '@/src/lib/features/api/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/lib/store';
import { notFound, useParams } from "next/navigation";

import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";

const page = () => {
  const params = useParams<{ podcastId: string }>();
  
  const genre = useSelector((state: RootState) => state.podcastGenre.value);
  const {data: podcasts, isLoading} = useGetTopPodcastsByGenresQuery(genre);

  const podcast = podcasts?.getTopChartsByGenres.podcastSeries.find(
    (p) => p.uuid === params.podcastId
  );

  if(!podcast) {
      notFound();
    }

  return (
    <div>
      <PodcastPlayHeader
        name={podcast?.name}
        description={podcast?.description}
        imageUrl={podcast?.imageUrl}
        bgImage={"url(/assets/background_pattern4.png)"}
      />
      <PodcastPlayEpisodes episodes={podcast?.episodes} />
    </div>
  )
}

export default page