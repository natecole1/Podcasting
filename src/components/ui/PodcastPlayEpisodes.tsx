import { useGetNoteworthyPodcastsDetailsQuery } from '@/src/lib/features/api/apiSlice';
import { useParams } from 'next/navigation';
import React from 'react'
import SmPlayButton from './SmPlayButton';
import AudioPlayer from './AudioPlayer';



const PodcastPlayEpisodes = () => {
    const params = useParams<{ podcastId: string }>();

    const { data: noteworthyPodcastSeries } =
      useGetNoteworthyPodcastsDetailsQuery();

    const podcast = noteworthyPodcastSeries?.getMultiplePodcastSeries.find(
      (p) => p.uuid === params.podcastId
    ); 
    

  return (
    <div className="w-full h-100vh bg-black-3 p-8">
      <h1 className="text-white-1">Episodes</h1>
      <div>
        {podcast?.episodes.map((episode) => {
          return (
            <div className="text-white-1" key={episode.name}>
              <div className="w-full bg-white-2 h-[1px] opacity-10 my-5" />
              <div className="w-full flex items-center justify-start gap-6">
                <div className="">
                  <SmPlayButton />
                </div>
                <div className="w-[80%] flex flex-col">
                  <h2>{episode.name}</h2>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default PodcastPlayEpisodes