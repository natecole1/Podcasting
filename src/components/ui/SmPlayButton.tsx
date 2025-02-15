import React from 'react'
import { FaPlay } from 'react-icons/fa'


const SmPlayButton = () => {
  return (
     <button className="w-[40px] h-[40px] flex items-center justify-center bg-gold-1  rounded-full">
       <FaPlay 
        className ='text-black-1'
        
       />
      </button>
  )
}

export default SmPlayButton