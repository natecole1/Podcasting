'use client'
import { useGetNoteworthyPodcastsDetailsQuery } from '@/src/lib/features/api/apiSlice';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SaveButton from './SaveButton';

const PodcastPlayHeader = () => {
    const params = useParams<{ podcastId: string }>();

    const { data: noteworthyPodcastSeries } =
        useGetNoteworthyPodcastsDetailsQuery();

    const podcast = noteworthyPodcastSeries?.getMultiplePodcastSeries.find(
    (p) => p.uuid === params.podcastId
    ); 
    console.log(podcast)

    const [ isPlaying, setIsPlaying ] = useState(false);
  return (
    <div className="text-white-1 w-full bg-background_one h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full h-full gap-8 bg-blackOverlay">
        <div>
          <Image
            src={podcast?.imageUrl}
            alt="podcast image"
            width={80}
            height={80}
            className="w-40 h-40 sm:w-44 md:h-44 lg:w-64 lg:h-64 2xl:w-[500px] 2xl:h-[500px] rounded-lg"
          />
        </div>
        <div className=" w-full md:w-[80%] flex flex-col text-center p-4 gap-4 lg:gap-8">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            {podcast?.name}
          </h1>
          <p className="line-clamp-4 text-sm md:text-lg xl:text-2xl">
            {podcast?.description}
          </p>
        </div>
        <div className="m-10 w-full flex gap-4 lg:gap-8 items-end justify-center">
          <div>{isPlaying ? <PauseButton /> : <PlayButton />}</div>
          <div>
            <SaveButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastPlayHeader