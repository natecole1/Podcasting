'use client'
import React from 'react';
import { notFound} from 'next/navigation';
import Image from 'next/image'
import { useGetPodcastSeriesDetailsQuery } from '@/src/lib/features/api/apiSlice';

const NoteworthyPodcastsDetail = () => {

    const { data: podcastSeries } = useGetPodcastSeriesDetailsQuery();
    console.log(podcastSeries)

    if(!podcastSeries) {
      notFound();
    }
    
  return (
    <div className="text-white-1 bg-black-1 w-full h-screen">
      <div>
        <Image
          src={podcastSeries?.getPodcastSeries.imageUrl}
          alt="podcast image"
          width={150}
          height={150}
          quality={100}
          className="rounded-lg w-[80%] h-[180px] aspect-square"
        />
      </div>
    </div>
  )
}

export default NoteworthyPodcastsDetail