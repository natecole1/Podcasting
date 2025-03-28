"use client";
import React, {useEffect, useState} from "react";

import { notFound, useParams } from "next/navigation";

import UserPodcastPlayHeader from "@/src/components/ui/UserPodcastPlayHeader";
import UserPodcastPlayEpisodes from "@/src/components/ui/UserPodcastPlayEpisode";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const PodcastDetail = () => {
  const params = useParams<{ podcastId: string }>();
  const podcast = useQuery(api.podcasts.getPodcasts);
  const episodes = useQuery(api.podcasts.getEpisodes);

  if(!podcast) {
    notFound();
  }
 

  return (
    <div>
      <UserPodcastPlayHeader
        name={podcast[0].podcastTitle}
        description={podcast[0].podcastDescription}
        imageUrl={podcast[0].imageUrl}
        bgImage={"url(/assets/background_pattern4.png)"}
      />
      <UserPodcastPlayEpisodes
        episodes={episodes} 
        name={podcast[0].podcastTitle}
        imageUrl={podcast[0].imageUrl}
      />
    </div>
  );
};

export default PodcastDetail;
