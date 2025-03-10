import React from 'react'
import { useGetTopPodcastsByGenresQuery } from '@/src/lib/features/api/apiSlice';
import { RootState } from '@/src/lib/store';
import { useSelector } from 'react-redux';
import PodcastCardLg from '@/src/components/ui/PodcastCardLg';
import { Skeleton } from '@/components/ui/skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';
import PodcastCard from './PodcastCard';
import PlayIcon from './PlayIcon';


const BrowsePodcastGenres = () => {
  const genre = useSelector((state: RootState) => state.podcastGenre.value);
  const {data: podcasts, isLoading} = useGetTopPodcastsByGenresQuery(genre);
  console.log(podcasts)

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="w=full h-full flex justify-center mt-2">
          <Skeleton className="w-[90%] h-[200px] bg-black-1 rounded-2xl" />
        </div>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="max-w-56 md:max-w-sm xl:max-w-lg overflow-hidden"
        >
          <div className=" relative overflow-hidden">
            {podcasts?.getTopChartsByGenres.podcastSeries
              .slice(0, 4)
              .map((podcast) => {
                return (
                  <SwiperSlide key={podcast.uuid}>
                    <Link
                      href={`/browse/browse-podcast/${genre}/${podcast.uuid}`}
                    >
                      <div className="relative group flex flex-col justify-center items-center ">
                        <PodcastCard
                          description={podcast.description}
                          title={podcast.name}
                          imgURL={podcast.imageUrl === null ? '/assets/No-Image-Placeholder.png' : podcast.imageUrl}
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
      )}
      <div className="w-full bg-white-2 h-[1px] opacity-10" />
      <div className='grid md:grid-cols-3'>
        {podcasts?.getTopChartsByGenres.podcastSeries.slice(5).map((podcast) => {
            return (
              <Link href={`/browse/browse-podcast/${genre}/${podcast.uuid}`}>
                <div className="relative group flex flex-col justify-center items-center ">
                  <PodcastCardLg
                    // host={podcast.itunesInfo.publisherName}
                    title={podcast.name}
                    imgURL={
                      podcast.imageUrl === null
                        ? "/assets/No-Image-Placeholder.png"
                        : podcast.imageUrl
                    }
                    podcastId={podcast.uuid}
                  />
                  <PlayIcon />
                </div>
              </Link>
            );
        })}
      </div>
    </div>
  );
}

export default BrowsePodcastGenres