'use client'
import React, { useEffect, useState } from "react";
import { RootState } from "@/src/lib/store";

import { useDispatch, useSelector } from "react-redux";
import SavedLibraryPodcast from "@/src/components/ui/SavedLibraryPodcast";
import AudioPlayer from "@/src/components/ui/AudioPlayer";
import CloseButton from "@/src/components/ui/CloseButton";
import { toggleIsPlaying } from "@/src/lib/features/play/playSlice";
import { closeAudioPlayer, displayAudioPlayer } from "@/src/lib/features/displayAudioPlayer/displayAudioPlayerSlice";
import { removePodcastFromLibrary } from "@/src/lib/features/podcastLibrary/podcastLibrarySlice";
import { Input } from "@/components/ui/input";
import { PodcastEpisodeType } from "@/src/types";
import { AiOutlineSearch } from "react-icons/ai";

const Library = () => {
   const podcastLibrary = useSelector((state: RootState) => state.podcastLibrary.podcastLibrary);

   const [podcastEpisodeId, setPodcastEpisodeId] = useState(0); 

   const [ filteredPodcastLibrary, setFilteredPodcastLibrary ] = useState(podcastLibrary);
   const [ value, setValue ] = useState('');

   
   const isAudioPlayerDisplayed = useSelector(
      (state: RootState) => state.isAudioPlayerDisplayed.value
    );

   const isPlaying = useSelector((state: RootState) => state.isPlaying.value);
   console.log(podcastLibrary);

   const dispatch = useDispatch();

   const handlePlayClick = (id: number) => {
    dispatch(toggleIsPlaying());
    dispatch(displayAudioPlayer());
    setPodcastEpisodeId(id);
   }

   const handleAudioPlayerClose = () => {
       if (isPlaying) {
         dispatch(toggleIsPlaying());
         dispatch(closeAudioPlayer());
       }
       dispatch(closeAudioPlayer()); 
     };

    const handleNextClick = () => {
        if (isPlaying) {
          setPodcastEpisodeId((prev) => (prev < podcastLibrary.length - 1 ? prev + 1 : prev));
        } else {
          setPodcastEpisodeId((prev) => (prev < podcastLibrary.length - 1 ? prev + 1 : prev));
          dispatch(toggleIsPlaying());
        }
      };

    const handlePrevClick = () => {
        if (isPlaying) {
          setPodcastEpisodeId((prev) => (prev > 0 ? prev - 1 : 0));
        } else {
          setPodcastEpisodeId((prev) => (prev > 0 ? prev - 1 : 0));
          dispatch(toggleIsPlaying());
        }
      };  

    const handleDeletePodcastClick = (id: string) => {
      dispatch(removePodcastFromLibrary(id))
    };

    useEffect(() => {
      setFilteredPodcastLibrary(podcastLibrary.filter((podcast) => podcast.podcastName.toLowerCase().startsWith(value)))
    },[value])
   
  return (
    <div className="w-full">
      {podcastLibrary.length === 0 ? (
        <div className="w-full mt-32 ">
          <div className="w-full bg-black-2 p-10 rounded-3xl flex flex-col items-center justify-center gap-4 lg:p-20">
            <h1 className="text-gold-1 text-xl xl:text-3xl">
              You Have No Podcasts Saved Yet!
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-10 lg:gap-2">
          <div className="relative w-[80%] max-w-[500px] m-auto">
            <AiOutlineSearch className="absolute left-2 top-3 md:left-4 size-5 text-white-1" />
            <Input
              type="text"
              placeholder="Search library..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="pl-9  md:pl-12 bg-black-1 border-none border-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 focus-visible:ring-0 w-full text-white-1"
            />
          </div>
          <div>
            <h1 className="font-bold text-gold-1 text-20 xl:my-4">
              Listen to Your Saved Podcasts
            </h1>
          </div>
          <div className="w-full h-full flex flex-col ">
            {filteredPodcastLibrary.map((podcast, id) => {
              return (
                <div>
                  <div key={podcast.id}>
                    <SavedLibraryPodcast
                      imageUrl={podcast.imageUrl}
                      podcastName={podcast.podcastName}
                      podcastEpisodeTitle={podcast.title}
                      onPlayClick={() => handlePlayClick(id)}
                      onDeleteClick={() => handleDeletePodcastClick(podcast.id)}
                      isPlaying={isPlaying}
                      podcastEpisodeId={podcastEpisodeId}
                      id={id}
                    />
                  </div>
                  <div className="w-full xl:w-[80%] bg-white-2 h-[1px] opacity-10 my-5 m-auto" />
                </div>
              );
            })}
          </div>
          {isAudioPlayerDisplayed && (
            <div className="fixed bottom-0 right-0 left-0 bg-[#000]/[0.8] w-full z-10 -translate-y-1 duration-500 ease-in">
              <CloseButton onClick={handleAudioPlayerClose} />
              <AudioPlayer
                audioUrl={podcastLibrary[podcastEpisodeId].audioUrl}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Library;
