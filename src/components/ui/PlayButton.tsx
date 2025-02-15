import Image from 'next/image'
import React from 'react'

const PlayButton = () => {
  return (
    <button className='w-44 md:w-52 xl:w-60 bg-gold-1 flex items-center justify-center gap-3 p-3 xl:p-6 rounded-full active:scale-90 '>
        <div>
            <Image 
            src={"/assets/play_icon.png"}
            alt='play icon'
            width={30}
            height={30}
          
            />
        </div>
        <div>
            <p className='text-xl xl:text-3xl text-black-1 font-bold'>Play</p>
        </div>
    </button>
  )
}

export default PlayButton