import { useGetNoteworthyPodcastsDetailsQuery } from '@/src/lib/features/api/apiSlice';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import AudioPlayer from './AudioPlayer';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/src/lib/store';


import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaPlay, FaPause } from 'react-icons/fa';
import { toggleIsPlaying } from '@/src/lib/features/play/playSlice';




const PodcastPlayEpisodes = () => {
    const isPlaying = useSelector((state: RootState) => state.isPlaying.value)
    const dispatch = useDispatch();

    const [podcastEpisodeId, setPodcastEpisodeId] = useState(0);
    const [displayPlayer, setDisplayPlayer ] = useState(false);
   
    const params = useParams<{ podcastId: string }>();

    const { data: noteworthyPodcastSeries } =
      useGetNoteworthyPodcastsDetailsQuery();

    const podcast = noteworthyPodcastSeries?.getMultiplePodcastSeries.find(
      (p) => p.uuid === params.podcastId
    ); 

    const handlePlayClick = (id: number) => {
      dispatch(toggleIsPlaying());
      setPodcastEpisodeId(id);
      setDisplayPlayer(true);

    }

    const handleNextClick = () => {
      if (isPlaying) {
        setPodcastEpisodeId((prev)=> prev < 9 ? prev + 1 : prev);
      } else {
        setPodcastEpisodeId((prev) => (prev < 9 ? prev + 1 : prev));
        dispatch(toggleIsPlaying())
      }
    }

    const handlePrevClick = () => {
      if (isPlaying) {
        setPodcastEpisodeId((prev) => prev > 0 ? prev - 1 : 0);
      } else {
         setPodcastEpisodeId((prev) => (prev > 0 ? prev - 1 : 0));
        dispatch(toggleIsPlaying());
      }
    };

    const handleAudioPlayerClose = () => {
      if (isPlaying) {
        dispatch(toggleIsPlaying());
        setDisplayPlayer(false);
      }
      setDisplayPlayer(false)
    }

  return (
    <div className="w-full h-100vh bg-black-3 px-8 pt-8 pb-40">
      <h1 className="text-white-1">Episodes</h1>
      <div>
        {podcast?.episodes.map((episode, id) => {
          return (
            <div className="text-white-1" key={episode.name}>
              <div className="w-full bg-white-2 h-[1px] opacity-10 my-5" />
              <div className="w-full flex items-center justify-start gap-6">
                <div>
                  <button
                    className="w-[40px] h-[40px] flex items-center justify-center bg-gold-1  rounded-full"
                    onClick={() => handlePlayClick(id)}
                  >
                    {isPlaying && podcastEpisodeId === id ? (
                      <FaPause className="text-[#000]" />
                    ) : (
                      <FaPlay className="text-[#000]" />
                    )}
                  </button>
                </div>

                <div className="w-[80%] flex flex-col gap-4">
                  <h2>{episode.name}</h2>
                  <p className="text-sm text-gray-400 line-clamp-3 sm:line-clamp-4">{episode.description}</p>
                  <p className=" flex justify-end text-xs hover:text-blue-600 cursor-pointer">View more</p>
                  <div className="w-12 h-6">
                    {isPlaying && podcastEpisodeId === id && (
                      <Image
                        src={"/assets/waveform_darkBg.gif"}
                        alt="animated waveform"
                        width={30}
                        height={30}
                        className="bg-black-3"
                        unoptimized
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {displayPlayer && (
        <div className="fixed bottom-0 right-0 left-0 bg-[#000]/[0.8] w-full z-10 -translate-y-1 duration-500 ease-in">
          <div className="flex justify-end h-3">
            <IoMdCloseCircleOutline
              size={20}
              className="cursor-pointer text-white-1"
              onClick={handleAudioPlayerClose}
            />
          </div>
          <AudioPlayer
            audioUrl={podcast?.episodes[podcastEpisodeId].audioUrl}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </div>
      )}
    </div>
  );
}

export default PodcastPlayEpisodes