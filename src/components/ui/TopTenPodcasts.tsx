import React from 'react'

import PodcastCard from './PodcastCard';

import { useGetTopTenPodcastsDetailsQuery } from '@/src/lib/features/api/apiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from "@/components/ui/skeleton";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import PlayIcon from './PlayIcon';
import Link from 'next/link';


const TopTenPodcasts = () => {
   const { data: podcasts, isLoading, isError } = useGetTopTenPodcastsDetailsQuery();
 
  return (
    <div className="pt-10 w-full ">
      <div>
        <h1 className="text-gold-1">Top Podcasts</h1>
        {isLoading ? (
          <div className='w=full h-full flex justify-center'>
            <Skeleton className='w-[90%] h-[220px] bg-black-1 rounded-2xl'/>
          </div>
        ) : (

        <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         slidesPerView={2}
         breakpoints={{
          480: {
            slidesPerView:3
          }
         }}
         coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
         }}
         pagination={{ clickable: true}}
         modules={[EffectCoverflow, Pagination]}
         className='max-w-56 md:max-w-sm xl:max-w-lg overflow-hidden'
        >
          
            <div className=' relative overflow-hidden'>
              {
                podcasts?.getMultiplePodcastSeries.map((podcast) => {
                  return (
                    <SwiperSlide key={podcast.uuid}>
                      <Link
                        href={`/home-dashboard/top-ten-podcasts/${podcast.uuid}`}
                      >
                        <div className="relative group flex flex-col justify-center items-center ">
                          <PodcastCard
                            description={podcast.description}
                            title={podcast.name}
                            imgURL={podcast.imageUrl}
                            podcastId={podcast.uuid}
                          />
                          <PlayIcon />
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
              }
            </div>
        </Swiper>
        )}
      </div>
    </div>  
)}

export default TopTenPodcasts