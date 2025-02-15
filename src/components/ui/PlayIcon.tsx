import Image from 'next/image'
import React from 'react'

const PlayIcon = () => {
  return (
    <div className="w-[50px] h-[50px] flex items-center bg-gold-1/[0.7]  -translate-x-1/2 -translate-y-1/2 absolute top-[50%] left-[50%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 active:scale-90 cursor-pointer">
      <Image
        src="/assets/play_icon.png"
        alt="play icon"
        width={30}
        height={30}
        className="block m-auto "
      />
    </div>
  );
}

export default PlayIcon;

// absolute top-[50%] left-[50%]

