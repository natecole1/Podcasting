'use client'
import React, { useState, useCallback, useEffect, useRef, ChangeEvent } from 'react'

import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { RiReplay15Line, RiRewindFill, RiForward15Line } from 'react-icons/ri'
import { BsFastForwardFill, BsVolumeDownFill, BsVolumeUpFill, BsVolumeMuteFill } from 'react-icons/bs'

import { AudioPlayerProps } from '@/src/types'

import { useSelector, useDispatch } from "react-redux";
import { toggleIsPlaying } from "@/src/lib/features/play/playSlice";
import type { RootState } from "@/src/lib/store";


const AudioPlayer = ({ audioUrl, handlePrevClick, handleNextClick }: AudioPlayerProps) => {

    const [ currentTime, setCurrentTime ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ volume, setVolume ] = useState(60);
    const [ muteVolume, setMuteVolume ] = useState(false);

    const audioPlayerRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);
    const playAnimationRef = useRef<number | null>(null)
   

     const isPlaying = useSelector((state: RootState) => state.isPlaying.value)
     const dispatch = useDispatch();
   

    const calculateTime = (time: number | undefined) => {
        if (typeof time === 'number' &&  !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);

            const formatMinutes = minutes.toString().padStart(2, '0');
            const formatSeconds = seconds.toString().padStart(2, '0');
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00'
    }

    const onLoadedMetadata = () => {
      const seconds = audioPlayerRef.current?.duration;
      if (seconds !== undefined) {
        setDuration(seconds);
        if(progressBarRef.current) {
          progressBarRef.current.max = seconds.toString();
        }
      }
    }

    const updateProgress = useCallback(() => {
      if ( audioPlayerRef.current && progressBarRef.current) {
        const currentTime = audioPlayerRef.current?.currentTime;
        setCurrentTime(currentTime);
        progressBarRef.current.value = currentTime.toString();
        progressBarRef.current.style.setProperty(
          '--range-progress',
          `${(currentTime / duration ) * 100}%`
        );

      } ;
    
      
    if (
      audioPlayerRef.current?.currentTime === audioPlayerRef.current?.duration
      && isPlaying === true
    ) {
      dispatch(toggleIsPlaying());
      
    }
        
    },[audioPlayerRef, progressBarRef] )

    const startAnimation = useCallback(() => {
      if (audioPlayerRef.current && progressBarRef.current) {
        const animate = () => {
          updateProgress();
          playAnimationRef.current = requestAnimationFrame(animate);
        }
        playAnimationRef.current = requestAnimationFrame(animate);
      }
    }, [ updateProgress, audioPlayerRef, progressBarRef])

    useEffect(() => {
       if (isPlaying) {
         startAnimation();
         audioPlayerRef.current?.play();
       } else {
         audioPlayerRef.current?.pause();
         if (playAnimationRef.current !== null) {
           cancelAnimationFrame(playAnimationRef.current);
           playAnimationRef.current = null;
         }

         updateProgress();
       }

       return () => {
         if (playAnimationRef.current !== null) {
           cancelAnimationFrame(playAnimationRef.current);
         };
         
       };

    },[isPlaying, audioUrl, startAnimation, updateProgress])

    const handlePlayPause = () => {
        dispatch(toggleIsPlaying());

    }
    
    const handleProgressChange = () => {
  
      if (audioPlayerRef.current && progressBarRef.current && isPlaying) {
        let newTime = Number(progressBarRef.current.value);
        audioPlayerRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${(newTime / duration) * 100}%`
        );

      
      
      }
    }
   
    const handleSkipForward = () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.currentTime += 15;
        updateProgress();
      }
    }
    
    const handleSkipBackward = () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.currentTime -= 15;
        updateProgress();
      }
    }

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
          setVolume(Number(e.target.value))
          if(audioPlayerRef.current) {
            audioPlayerRef.current.volume = volume/100;
            audioPlayerRef.current.muted = muteVolume
          }
    }

    const handleVolumeClick = () => {
      setMuteVolume(prev => !prev);
      setVolume(Number(0));

      if(audioPlayerRef.current) {
        audioPlayerRef.current.volume = 0;
        audioPlayerRef.current.muted = muteVolume;
      }
    }

  return (
    <div className="w-full text-white-1 flex flex-col items-center justify-center p-2 gap-4 ">
      <div>
        <audio
          ref={audioPlayerRef}
          src={audioUrl}
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
        />
      </div>
      <div className=" w-[80%] flex justify-between items-center">
        <div className="text-md sm:text-lg w-12 flex items-center">
          <span>{calculateTime(currentTime)}</span>
        </div>
        <div className=" w-[80%] flex justify-center ">
          <input
            type="range"
            ref={progressBarRef}
            defaultValue={0}
            className="cursor-pointer "
            onChange={handleProgressChange}
          />
        </div>
        <div className="text-md sm:text-lg w-12 flex items-start pl-1">
          <span>{duration && !isNaN(duration) && calculateTime(duration)}</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-6 md:ml-36">
          <button className=" text-xl" onClick={handlePrevClick}>
            <RiRewindFill className="text-3xl hover:text-4xl hover:text-gold-1 transition duration-500 ease-in-out" />
          </button>
          <button className=" text-xl" onClick={handleSkipBackward}>
            <RiReplay15Line className="text-3xl hover:text-4xl hover:text-gold-1 hover:-rotate-45 transition duration-500 ease-in-out" />
          </button>
          <button
            onClick={handlePlayPause}
            className="flex justify-center items-center p-2 w-16 h-16 rounded-full bg-gold-1"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className=" text-xl" onClick={handleSkipForward}>
            <RiForward15Line className="text-3xl hover:text-4xl hover:text-gold-1 hover:rotate-45 transition duration-500 ease-in-out" />
          </button>
          <button className=" text-xl" onClick={handleNextClick}>
            <BsFastForwardFill className="text-3xl hover:text-4xl hover:text-gold-1 transition duration-500 ease-in-out" />
          </button>
        </div>
        <div className=" hidden md:flex items-center justify-center group">
          <button onClick={handleVolumeClick}>
            {muteVolume || volume < 3 ? (
              <BsVolumeMuteFill size={25} />
            ) : volume < 60 ? (
              <BsVolumeDownFill size={25} />
            ) : (
              <BsVolumeUpFill size={25} />
            )}
          </button>
          <div>
            <div className="relative opacity-0 group-hover:opacity-100 ml-1">
              <div className="z-50 flex items-center">
                <input
                  type="range"
                  className="cursor-pointer"
                  value={volume}
                  min={0}
                  max={100}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer