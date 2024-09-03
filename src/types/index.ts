import { Id } from "@/convex/_generated/dataModel";
import { Dispatch, SetStateAction } from "react";

export interface GeneratePodcastProps {
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudio: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
  audio: string;
  voiceType: string;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
}

export type voiceType = "echo" | "fable" | "nova" | "onyk" | "shimmer";

export interface GenerateThumbnailProps {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
}
