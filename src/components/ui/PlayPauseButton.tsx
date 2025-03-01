import React from 'react'
import { FaPlay, FaPause } from "react-icons/fa";
import { PlayPauseButtonProps } from '@/src/types';

const PlayPauseButton = ({ onClick, isPlaying, podcastEpisodeId, id}: PlayPauseButtonProps) => {
  return (
    <div>
        <button
            className="w-[40px] h-[40px] flex items-center justify-center bg-gold-1 rounded-full"
            onClick={onClick}
            >
            {isPlaying && podcastEpisodeId === id ? (
                <FaPause className="text-black-7" />
            ) : (
                <FaPlay className="text-black-7" />
            )}
        </button>
    </div>
  )
}

export default PlayPauseButton