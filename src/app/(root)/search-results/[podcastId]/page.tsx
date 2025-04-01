"use client";
import React from "react";

import { notFound, useParams } from "next/navigation";
import {

  useGetPodcastSearchResultsQuery,

} from "@/src/lib/features/api/apiSlice";

import PodcastPlayHeader from "@/src/components/ui/PodcastPlayHeader";
import PodcastPlayEpisodes from "@/src/components/ui/PodcastPlayEpisodes";
import { useSelector } from "react-redux";
import { RootState } from '@/src/lib/store';


const SearchResultsPodcastDetail = () => {
  const params = useParams<{ podcastId: string }>();
  const userInput = useSelector((state: RootState) => state.podcastSearch.value)

  const { data: podcasts } = useGetPodcastSearchResultsQuery(userInput)

  const podcast = podcasts?.search.podcastSeries.find(p => p.uuid === params.podcastId);
  console.log(podcast?.episodes)

  if(!podcast) {
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
      <PodcastPlayEpisodes 
        episodes={podcast.episodes} 
        name={podcast.name}
        imageUrl={podcast.imageUrl}
      />
    </div>
  );
};

export default SearchResultsPodcastDetail;
