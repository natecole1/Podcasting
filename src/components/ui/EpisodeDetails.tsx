import React from 'react'
import { EpisodeDetailsProps } from '@/src/types';
import Modal from './Modal';


const EpisodeDetails = ({name, description}: EpisodeDetailsProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p className="text-sm text-gray-400 line-clamp-3 sm:line-clamp-4">
        {description}
      </p>
      
      <Modal
       textToClick='View more'
       title={name}
      >
        {description}
      </Modal>
    </div>
  );
}

export default EpisodeDetails