
import React from 'react'
import { useGetTopTechPodcastsDetailsQuery } from '@/src/lib/features/api/apiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from '@/components/ui/skeleton';
import { Navigation, Pagination } from 'swiper/modules';
import PodcastCardLg from './PodcastCardLg';

import 'swiper/css';
import 'swiper/css/navigation';
import PlayIcon from './PlayIcon';
import Link from 'next/link';

const TopTechPodcasts = () => {
  const { data: techPodcasts, isLoading } = useGetTopTechPodcastsDetailsQuery();
  
 
  return (
    <div className="w-full pt-5">
      <div className="w-full bg-white-2 h-[1px] opacity-10" />
      <h1 className="text-gold-1 pt-5">Top Tech Podcasts</h1>
      {isLoading ? (
        <div className="w=full h-full flex justify-center">
          <Skeleton className="w-[90%] h-[200px] bg-black-1 rounded-2xl" />
        </div>
      ) : (
        <div className="w-full m-auto">
          <Swiper
            loop={true}
            centeredSlides={true}
            breakpoints={{
              0: {
                // For all devices
                slidesPerView: 1.5,
                
              },
              640: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation]}
            className="w-full max-w-[250px] sm:max-w-[470px] lg:max-w-2xl xl:max-w-6xl"
            observeParents={true}
          >
            <div>
              {techPodcasts?.getMultiplePodcastSeries.map((podcast) => {
                return (
                  <SwiperSlide key={podcast.uuid}>
                   <Link  href={`/home-dashboard/top-tech-podcasts/${podcast.uuid}`}
                      >
                    <div className="relative group flex flex-col justify-center items-center ">
                      <PodcastCardLg
                        host={podcast.itunesInfo.publisherName}
                        title={podcast.name}
                        imgURL={podcast.imageUrl}
                        podcastId={podcast.uuid}
                      />
                      <PlayIcon />
                    </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default TopTechPodcasts