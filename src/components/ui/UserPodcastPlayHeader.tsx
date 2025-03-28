'use client'
import Image from 'next/image';
import React from 'react'

import SaveButton from './SaveButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/lib/store';
import { toggleIsPlaying } from "@/src/lib/features/play/playSlice";
import { displayAudioPlayer } from '@/src/lib/features/displayAudioPlayer/displayAudioPlayerSlice';
import HeaderPlayPauseButton from './HeaderPlayPauseButton';
import { UserPodcastPlayHeaderProps } from '@/src/types';
import { cn } from '@/src/lib/utils';


const UserPodcastPlayHeader = ({name, description, imageUrl, bgImage}: UserPodcastPlayHeaderProps) => {
  const isPlaying = useSelector((state: RootState) => state.isPlaying.value);
  
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(toggleIsPlaying());
    dispatch(displayAudioPlayer());
  }


  return (
    <div className={cn(`text-white-1 w-full bg-no-repeat bg-cover h-[100vh]`)} style={{backgroundImage: bgImage}}>
      <div className="flex flex-col justify-center items-center w-full h-full gap-8 bg-blackOverlay">
        <div>
          <Image
            src={imageUrl}
            alt="podcast image"
            width={80}
            height={80}
            className="w-40 h-40 sm:w-44 md:h-44 lg:w-64 lg:h-64 2xl:w-[500px] 2xl:h-[500px] rounded-lg"
          />
        </div>
        <div className=" w-full md:w-[80%] flex flex-col text-center p-4 gap-4 lg:gap-8">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            {name}
          </h1>
          <p className="line-clamp-4 text-sm md:text-lg xl:text-2xl">
            {description}
          </p>
        </div>
        <div className="m-10 w-full flex gap-4 lg:gap-8 items-end justify-center">
          <div>
            <HeaderPlayPauseButton 
             onClick={handleClick}
             isPlaying={isPlaying}
            />
          </div>
          <div>
            <SaveButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPodcastPlayHeader