"use client";
import React, {useEffect, useState} from "react";

import { notFound, useParams } from "next/navigation";

import UserPodcastPlayHeader from "@/src/components/ui/UserPodcastPlayHeader";
import UserPodcastPlayEpisodes from "@/src/components/ui/UserPodcastPlayEpisode";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { FilteredPodcastType } from "@/src/types";



const PodcastDetail = () => {
  const { user } = useUser();
  const podcast = useQuery(api.podcasts.getPodcasts) 

  let filteredPodcast = podcast!.filter(
    (podcast) => podcast.authorId === user?.id
  );

  const episodes = useQuery(api.podcasts.getEpisodes);

   const filteredEpisodes = episodes?.filter(
     (episodes) => episodes.authorId === user?.id
   );

   console.log(filteredEpisodes)

  if(!podcast) {
    notFound();
  }
 

  return (
    <div>
      <UserPodcastPlayHeader
        name={filteredPodcast[0].podcastTitle} 
        description={filteredPodcast[0].podcastDescription}
        imageUrl={filteredPodcast[0].imageUrl}
        bgImage={"url(/assets/background_pattern4.png)"}
      />
      <UserPodcastPlayEpisodes
        episodes={filteredEpisodes} 
        name={filteredPodcast[0].podcastTitle}
        imageUrl={filteredPodcast[0].imageUrl}
      />
    </div>
  );
};

export default PodcastDetail;
