"use client";
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";


import { Input } from "@/src/components/ui/input";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "@/components/ui/use-toast";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

import { useUploadFiles } from '@xixixao/uploadstuff/react';
import { v4 as uuidv4} from 'uuid'

import RecordPodcast from '@/src/components/ui/RecordPodcast';
import { useVoiceVisualizer } from 'react-voice-visualizer';
import { FFmpeg }  from '@ffmpeg/ffmpeg';


const formSchema = z.object({
  podcastEpisodeTitle: z.string().min(2).max(50),
  podcastEpisodeDescription: z.string().min(2).max(200),
});

const CreateEpisode = () => {
  const [isSubmitting, setIsSubmitting ] = useState(false);

  const recorderControls = useVoiceVisualizer();
  const {
    recordedBlob,
    formattedRecordingTime,
    isAvailableRecordedAudio,
    isRecordingInProgress,
  } = recorderControls;

  const createEpisode = useMutation(api.podcasts.createEpisode);

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const { startUpload } = useUploadFiles(generateUploadUrl);
  const getAudioUrl = useMutation(api.podcasts.getUrl);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        podcastEpisodeTitle: "",
        podcastEpisodeDescription: "",
  
      },
    });

    
    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        
        try {
          setIsSubmitting(true);

          const fileName = `podcast-episode-${uuidv4()}.mp3`;
          
          const file = new File([recordedBlob!], fileName, {type: 'audio/mp3'});
         
          const uploaded = await startUpload([file]);
          const storageId = await (uploaded[0].response as any).storageId;

          const audioUrl = await getAudioUrl({ storageId });

          const episode = await createEpisode({
            podcastEpisodeTitle: data.podcastEpisodeTitle,
            podcastEpisodeDescription: data.podcastEpisodeDescription,
            audioUrl: audioUrl!,
            audioStorageId: storageId!, 

          })
          toast({
            title: "Podcast successfully saved",
            variant: "success"
          })
          setIsSubmitting(false);

          router.push('/view-podcast')
        } catch (error) {
          console.log('Error: post episode')
          toast({
            title: "Podcast episode was not successfully saved",
            variant: 'destructive'
          })
          setIsSubmitting(false);
        }
     }

    
  return (
    <section className="flex flex-col mt-10">
      <h1 className="font-bold text-gold-1 text-20">Create Podcast Episode</h1>;
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full mt-12"
        >
          <div className="flex flex-col gap-10 xl:gap-20">
            <div className="flex flex-col">
              <FormField
                control={form.control}
                name="podcastEpisodeTitle"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 ">
                    <FormLabel className="font-bold text-white-1">
                      Episode Title
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Podcast Title" {...field}/>
                    </FormControl>
                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="podcastEpisodeDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="font-bold text-white-1">
                      Episode Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type a brief description of the episode"
                        rows={5}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full my-10">
            <div className="w-full ">
              <h1 className="font-bold text-gold-1 text-20">
                Record Your Podcast
              </h1>
    
            </div>
            <div className='w-full'>
              <RecordPodcast 
                recorderControls={recorderControls}
                isRecordingInProgress={isRecordingInProgress}
                formattedRecordingTime={formattedRecordingTime}
                isAvailableRecordedAudio={isAvailableRecordedAudio}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default CreateEpisode