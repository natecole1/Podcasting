import { HeaderPlayPauseButtonProps } from '@/src/types';
import React from 'react'
import { FaPlay, FaPause } from "react-icons/fa";

const HeaderPlayPauseButton = ({onClick, isPlaying}: HeaderPlayPauseButtonProps) => {
  return (
    <div>
      <button
        className="w-40 md:w-48 xl:w-60 bg-gold-1 flex items-center justify-center gap-3 p-3 xl:p-6 rounded-full active:scale-90 "
        onClick={onClick}
      >
        {isPlaying ? (
          <div className="flex gap-4 justify-center items-center text-black-7">
            <FaPause />
            <h3>Pause</h3>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center text-black-7">
            <FaPlay />
            <h3>Play</h3>
          </div>
        )}
      </button>
    </div>
  );
}

export default HeaderPlayPauseButton