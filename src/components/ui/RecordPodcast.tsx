
import React from 'react'

import { Button } from '@/components/ui/button';
import { RecordPodcastProps } from '@/src/types';

import { VoiceVisualizer } from "react-voice-visualizer";
import { Loader } from 'lucide-react';

const RecordPodcast = ({ recorderControls, isRecordingInProgress, formattedRecordingTime, isAvailableRecordedAudio, isSubmitting }: RecordPodcastProps) => {
  
  
  return (
    <div>
      <div className="w-full h-full my-10">
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <VoiceVisualizer
              controls={recorderControls}
              mainBarColor="#33FFFC"
              secondaryBarColor="#EE0000"
              barWidth={3}
              gap={2}
              speed={2}
              controlButtonsClassName="bg-black-7"
            />
            <div>
              {isRecordingInProgress && (
                <h2 className="text-white-1 text-lg">
                  {formattedRecordingTime}
                </h2>
              )}
            </div>
          </div>
            <div className="w-full">
            {isAvailableRecordedAudio && (
                <Button
                type="submit"
                className="w-full bg-gold-1 text-black-1 font-extrabold hover:rounded-3xl transition-all duration-500"
                variant={"outline"}
                >
                 {isSubmitting ? <Loader className='animate-spin w-10' /> : "Save Your Podcast"}
                </Button>
            )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default RecordPodcast