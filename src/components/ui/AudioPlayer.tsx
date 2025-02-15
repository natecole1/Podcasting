'use client'
import React, { useState, useCallback, useEffect, useRef, ChangeEvent } from 'react'

import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { RiRewindFill, RiRewindStartFill } from 'react-icons/ri'
import { BsFastForwardFill, BsVolumeDownFill, BsVolumeUpFill, BsVolumeMuteFill } from 'react-icons/bs'
import { AiFillFastForward } from 'react-icons/ai'


const AudioPlayer = ({ audioUrl }: string) => {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ volume, setVolume ] = useState(60);
    const [ muteVolume, setMuteVolume ] = useState(false);

    const audioPlayerRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);
    const playAnimationRef = useRef<number | null>(null)
   

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
      if ( audioPlayerRef.current && progressBarRef.current && duration) {
        const currentTime = audioPlayerRef.current?.currentTime;
        setCurrentTime(currentTime);
        progressBarRef.current.value = currentTime.toString();
        progressBarRef.current.style.setProperty(
          '--range-progress',
          `${(currentTime / duration ) * 100}%`
        )
      }
    },[duration, setCurrentTime, audioPlayerRef, progressBarRef])

    const startAnimation = useCallback(() => {
      if (audioPlayerRef.current && progressBarRef.current && duration) {
        const animate = () => {
          updateProgress();
          playAnimationRef.current = requestAnimationFrame(animate);
        }
        playAnimationRef.current = requestAnimationFrame(animate);
      }
    }, [updateProgress, duration, audioPlayerRef, progressBarRef])

    const handlePlayPause = () => {
       
        setIsPlaying(prev => !prev);

        if(!isPlaying) {
            audioPlayerRef.current?.play();
            startAnimation();
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
          }
        }
    }
    

    const handleProgressChange = () => {
  
      if (audioPlayerRef.current && progressBarRef.current) {
        const newTime = Number(progressBarRef.current.value);
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
        audioPlayerRef.current.currentTime += 30;
        updateProgress();
      }
    }
    
    const handleSkipBackward = () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.currentTime -= 30;
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
      // setMuteVolume(prev => !prev);
      // setVolume(Number(0));

      // if(audioPlayerRef.current) {
      //   audioPlayerRef.current.volume = 0;
      //   audioPlayerRef.current.muted = muteVolume;
      // }
    }

  return (
    <div className="w-full text-white-1 flex flex-col items-center justify-center p-4 gap-4 ">
      <div>
        <audio
          ref={audioPlayerRef}
          src={audioUrl}
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
        />
      </div>
      <div className=" w-[80%] flex justify-between items-center">
        <div className="text-lg w-12 flex items-center">
          <span>{calculateTime(currentTime)}</span>
        </div>
        <div className=" w-[90%] flex items-center justify-center">
          <input
            type="range"
            ref={progressBarRef}
            defaultValue={0}
            className=" appearance-none w-full h-2 bg-gray-300 max-w-[80%] rounded-full cursor-pointer "
            onChange={handleProgressChange}
          />
        </div>
        <div className="text-lg">
          <span>{duration && !isNaN(duration) && calculateTime(duration)}</span>
        </div>
      </div>
      <div className="flex w-full p-4">
        
        <div className="flex items-center justify-center gap-6 w-full">
          {/* <button className=" text-xl">
          <RiRewindStartFill size={30} />
        </button> */}
          <button className=" text-xl" onClick={handleSkipBackward}>
            <RiRewindFill size={30} />
          </button>
          <button
            onClick={handlePlayPause}
            className="flex justify-center items-center p-2 w-16 h-16 rounded-full bg-gold-1"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className=" text-xl" onClick={handleSkipForward}>
            <BsFastForwardFill size={30} />
          </button>
          {/* <button className=" text-xl">
          <AiFillFastForward size={40} />
        </button> */}
        </div>
        {/* <div className="flex items-center justify-center ml-6  group">
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
            <div className="relative opacity-0 group-hover:opacity-100">
              <div className="z-50 ">
                <input
                  type="range"
                  className="-rotate-90 absolute -top-10 -left-8"
                  value={volume}
                  min={0}
                  max={100}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AudioPlayer