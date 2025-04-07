'use client'
import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

import Link from 'next/link';
import Image from 'next/image';
import PlayIcon from '@/src/components/ui/PlayIcon';



const ViewPodcasts = () => {
    const { user } = useUser();
    const podcast = useQuery(api.podcasts.getPodcasts);

    const filteredPodcast = podcast?.filter(podcast => podcast.authorId === user?.id);

  return (
    <div className='w-full'>
        {filteredPodcast?.length === 0 ? (
          <div className="w-full mt-32 ">
          <div className="w-full bg-black-2 p-10 rounded-xl flex flex-col items-center justify-center gap-4 lg:p-20">
            <h1 className="text-gold-1 text-xl xl:text-3xl">
              You have not created podcast yet!
            </h1>
          </div>
        </div>
        ) : (
          <div className='w-full gap-4'>
            <h1 className="font-bold text-gold-1 text-20">Listen to your Podcast</h1>
            <div className='text-white-1'>
              {filteredPodcast?.map((podcast) => {
                    return (
                      <div key={podcast._id} className="flex">
                        <div className="py-2 flex justify-center cursor-pointer">
                          <Link
                            href={`/view-podcast/${podcast._id}`}
                            >
                            <div className="relative group flex flex-col justify-center items-center ">
                              <Image
                                src={podcast.imageUrl}
                                alt="podcast image"
                                width={100}
                                height={100}
                                className=" min-w-20 rounded-lg hover:shadow-custom-sm-light hover:-translate-y-1 duration-300 ease-in"
                              />
                              <PlayIcon />
                            </div>
                          </Link>
                          <div className=" flex flex-col justify-start items-start pl-4 gap-2">
                            <h1 className="text-white-1">{podcast.podcastTitle}</h1>
                            <p className="text-xs text-white-2">
                              {podcast.podcastDescription}
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
  )
}

export default ViewPodcasts