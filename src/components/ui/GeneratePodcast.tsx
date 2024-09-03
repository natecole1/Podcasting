import { GeneratePodcastProps } from "@/src/types";
import React, { useState } from "react";
import { Label } from "./label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./button";
import { Loader } from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { generateUploadUrl } from "@/convex/files";
import { useUploadFiles } from "@xixixao/uploadstuff/react";
import { toast } from "@/components/ui/use-toast";

const useGeneratePodcast = ({
  setAudio,
  voiceType,
  voicePrompt,
  setAudioStorageId,
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const { startUpload } = useUploadFiles(generateUploadUrl);

  const getPodcastAudio = useAction(api.openai.generateAudioAction);

  const getAudioUrl = useMutation(api.podcasts.getUrl);

  const generatePodcast = async () => {
    setIsGenerating(true);
    setAudio("");

    if (!voicePrompt) {
      toast({
        title: "Please select a voice type to generate a podcast.",
      });
      return setIsGenerating(false);
    } else {
      try {
        const response = await getPodcastAudio({
          voice: voiceType,
          input: voicePrompt,
        });

        const blob = new Blob([response], { type: "audio.mpeg" });
        const fileName = `podcast-${uuidv4()}.mp3`;
        const file = new File([blob], fileName, { type: "audio/mpeg" });

        const uploaded = await startUpload([file]);
        const storageId = (uploaded[0].response as any).storageId;

        setAudioStorageId(storageId);

        const audioUrl = await getAudioUrl({ storageId });

        setAudio(audioUrl!);
        setIsGenerating(false);
        toast({
          title: "Podcast generated successfully.",
        });
      } catch (error) {
        console.log("Error occurred while generating podcast", error);
        toast({
          title: "Error occured while creating a podcast.",
          variant: "destructive",
        });
      }
    }
  };

  return { isGenerating, generatePodcast };
};

const GeneratePodcast = (props: GeneratePodcastProps) => {
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);

  return (
    <div>
      <div>
        <Label className="text-white-1">Prompt for AI-generated Podcast</Label>
        <Textarea
          className="input_class"
          placeholder="Provide Text to Generate Audio"
          rows={10}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>
      <div className="max-w-[200px] w-full mt-8">
        <Button
          type="submit"
          className="w-full bg-gold-1 text-black-1 font-extrabold hover:rounded-3xl transition-all duration-500"
          onClick={generatePodcast}
        >
          {isGenerating ? (
            <>
              Generating
              <Loader className="ml-2 animate-spin" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audio && (
        <audio
          src={props.audio}
          controls
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </div>
  );
};

export default GeneratePodcast;
