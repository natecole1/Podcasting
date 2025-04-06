import React from 'react'
import Image from 'next/image'
import { SavedLibraryPodcastProps } from '@/src/types'
import Waveform from './Waveform'
import PlayPauseButton from './PlayPauseButton'
import { RiDeleteBin4Fill } from 'react-icons/ri'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


const SavedLibraryPodcast = ({imageUrl, podcastName, podcastEpisodeTitle, onPlayClick, onDeleteClick, isPlaying, podcastEpisodeId, id}: SavedLibraryPodcastProps) => {
  
  return (
    <div className="flex flex-col  w-full my-4">
      <div className='w-full flex flex-col md:flex-row md:justify-start gap-2 md:gap-4'>
        <div className=" w-full sm:w-40 flex-center p-1">
          <Image
            src={imageUrl}
            alt="podcast image"
            width={80}
            height={80}
            className="rounded-lg md:w-24 w-32"
          />
        </div>
        <div className="w-full  flex flex-col text-center" >
          <div>
            <p className="text-white-1 font-extrabold">{podcastName}</p>
          </div>
        
          <div className='w-full'>
            <p className="text-white-2 text-ellipsis line-clamp-1 overflow-hidden" >{podcastEpisodeTitle}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-2 mt-6 lg:mt-8">
        <div className="w-12 h-6">
          {isPlaying && podcastEpisodeId === id && <Waveform />}
        </div>
        <div>
          <PlayPauseButton
            onClick={onPlayClick}
            isPlaying={isPlaying}
            podcastEpisodeId={podcastEpisodeId}
            id={id}
          />
        </div>
        <div className='flex items-end'>
          <AlertDialog>
            <AlertDialogTrigger >
              <RiDeleteBin4Fill className="text-red-500 w-10 h-10 cursor-pointer" />
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-black-2 border-black-2 text-white-1 max-w-[80%] md:max-w-[400px] xl:max-w-[600px] rounded-2xl lg:rounded-3xl p-8 lg:p-16'>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this podcast from your library.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className='gap-2 flex '>
                <AlertDialogCancel className='bg-gold-1 text-black-1 border-none'>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDeleteClick} className='bg-red-500  text-white-1 border-none'>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default SavedLibraryPodcast