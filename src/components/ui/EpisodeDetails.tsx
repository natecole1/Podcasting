import React from 'react'
import { EpisodeDetailsProps } from '@/src/types';

const EpisodeDetails = ({name, description}: EpisodeDetailsProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p className="text-sm text-gray-400 line-clamp-3 sm:line-clamp-4">
        {description}
      </p>
      <p className=" flex justify-end text-xs hover:text-blue-600 cursor-pointer">
        View more
      </p>
    </div>
  );
}

export default EpisodeDetails