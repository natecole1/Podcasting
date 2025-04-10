'use client'
import React from 'react';
import { useGetNoteworthyPodcastsDetailsQuery } from '@/src/lib/features/api/apiSlice';
import { Skeleton } from "@/components/ui/skeleton";
import Image from 'next/image'
import PlayIcon from './PlayIcon';
import Link from 'next/link';

const NoteworthyPodcasts = () => {
   const { data: noteworthyPodcastSeries, isLoading } = useGetNoteworthyPodcastsDetailsQuery();


  
  return (
    <div className="w-full pt-5">
      <div className="w-full bg-white-2 h-[1px] opacity-10" />
      <h1 className="text-gold-1 pt-5">Noteworthy Podcasts</h1>
      {isLoading ? (
        <div className="w=full h-full flex justify-center mt-2">
          <Skeleton className="w-[90%] h-[200px] bg-black-1 rounded-2xl" />
        </div>
      ) : (
        <div className="w-full p-4">
        
          <div className="w-full grid md:grid-cols-2 gap-x-3 place-content-center">
            {noteworthyPodcastSeries?.getMultiplePodcastSeries.map(
              (podcast) => {
                return (
                  <div key={podcast.name} className="flex">
                    <div className="py-2 flex justify-center cursor-pointer">
                      <Link
                        href={`/home-dashboard/noteworthy-podcasts/${podcast.uuid}`}
                       >
                        <div className="relative group flex flex-col justify-center items-center ">
                          <Image
                            src={podcast.imageUrl}
                            alt="podcast image"
                            width={80}
                            height={80}
                            className=" min-w-20 rounded-lg hover:shadow-custom-sm-light hover:-translate-y-1 duration-300 ease-in"
                          />
                          <PlayIcon />
                        </div>
                      </Link>
                      <div className=" flex flex-col justify-center items-start pl-2 gap-2">
                        <h1 className="text-white-1">{podcast.name}</h1>
                        <p className="text-xs text-white-2">
                          {podcast.itunesInfo.publisherName}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteworthyPodcasts

