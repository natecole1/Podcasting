
import React, { useState } from "react";

import AudioPlayer from "./AudioPlayer";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/lib/store";

import { toggleIsPlaying } from "@/src/lib/features/play/playSlice";
import {
  displayAudioPlayer,
  closeAudioPlayer,
} from "@/src/lib/features/displayAudioPlayer/displayAudioPlayerSlice";
import CloseButton from "./CloseButton";
import Waveform from "./Waveform";
import EpisodeDetails from "./EpisodeDetails";
import PlayPauseButton from "./PlayPauseButton";
import { UserPodcastPlayEpisodesProps } from "@/src/types";
import { MdDataSaverOn } from "react-icons/md"
import { addPodcastToLibrary } from "@/src/lib/features/podcastLibrary/podcastLibrarySlice";
import { useToast } from "@/components/ui/use-toast";


const UserPodcastPlayEpisodes = ({episodes, name, imageUrl}: UserPodcastPlayEpisodesProps) => {
  const isPlaying = useSelector((state: RootState) => state.isPlaying.value);
 

  const isAudioPlayerDisplayed = useSelector(
    (state: RootState) => state.isAudioPlayerDisplayed.value
  );
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [podcastEpisodeId, setPodcastEpisodeId] = useState(0);

  const handlePlayClick = (id: number) => {
    dispatch(toggleIsPlaying());
    dispatch(displayAudioPlayer());
    setPodcastEpisodeId(id);
  };

  const handleNextClick = () => {
    if (isPlaying) {
      setPodcastEpisodeId((prev) => (prev < episodes!.length ? prev + 1 : prev));
    } else {
      setPodcastEpisodeId((prev) => (prev < episodes!.length ? prev + 1 : prev));
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

  const handleAudioPlayerClose = () => {
    if (isPlaying) {
      dispatch(toggleIsPlaying());
      dispatch(closeAudioPlayer());
    }
    dispatch(closeAudioPlayer()); 
  };

  const handleSaveToLibrary = (id: string, title:string, name:string, imageUrl:string, audioUrl:string) => {
    dispatch(addPodcastToLibrary({
      id:id,
      title:title,
      podcastName:name,
      imageUrl:imageUrl,
      audioUrl:audioUrl
    } ));
    toast({
      variant: "success",
      description: "You've add the podcast to your library!",
    });
  }

  

  return (
    <div className="w-full h-100vh bg-black-3 px-8 pt-8 pb-40 xl:px-60">
      <h1 className="text-gold-1 font-extrabold text-md lg:text-3xl">
        Episodes
      </h1>
      <div className="">
        {episodes?.map((episode, id) => {
          return (
            <div className="text-white-1 " key={episode.podcastEpisodeTitle}>
              <div className="w-full xl:w-[80%] bg-white-2 h-[1px] opacity-10 my-5 m-auto" />
              <div className="w-full flex items-center justify-start xl:justify-center gap-6">
                <div>
                  <PlayPauseButton
                    onClick={() => handlePlayClick(id)}
                    podcastEpisodeId={podcastEpisodeId}
                    id={id}
                    isPlaying={isPlaying}
                  />
                </div>

                <div className="w-[80%] flex flex-col gap-4">
                  <EpisodeDetails
                    name={episode.podcastEpisodeTitle}
                    description={episode.podcastEpisodeDescription}
                  />
                  <div className="flex gap-4 items-center">
                    <div className="w-12">
                      <MdDataSaverOn
                        className="text-gold-1 w-8 h-8 hover:scale-105 cursor-pointer"
                        onClick={() =>
                          handleSaveToLibrary(
                            episode._id,
                            episode.podcastEpisodeTitle,
                            name,
                            imageUrl!,
                            episode.audioUrl
                          )
                        }
                      />
                    </div>
                    <div className="w-12 h-6">
                      {isPlaying && podcastEpisodeId === id && <Waveform />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isAudioPlayerDisplayed && (
        <div className="fixed bottom-0 right-0 left-0 bg-[#000]/[0.8] w-full z-10 -translate-y-1 duration-500 ease-in">
          <CloseButton onClick={handleAudioPlayerClose} />
          <AudioPlayer
            audioUrl={episodes![podcastEpisodeId].audioUrl}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </div>
      )}
    </div>
  );
};

export default UserPodcastPlayEpisodes;
