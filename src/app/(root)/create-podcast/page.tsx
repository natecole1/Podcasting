"use client";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { cn } from "@/src/lib/utils";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import GeneratePodcast from "@/src/components/ui/GeneratePodcast";

import { Loader } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";

const formSchema = z.object({
  podcastTitle: z.string().min(2).max(50),
  podcastDescription: z.string().min(2).max(50),
});

const CreatePodcast = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagePrompt, setImagePrompt] = useState("");
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [imageUrl, setImageUrl] = useState("");

  const [audioUrl, setAudioUrl] = useState("");
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [audioDuration, setAudioDuration] = useState(0);

  const [voicePrompt, setVoicePrompt] = useState("");
  const [voiceType, setVoiceType] = useState<string | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex flex-col mt-10">
      <h1 className="font-bold text-gold-1 text-20">Create Podcast</h1>;
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full mt-12"
        >
          <div className="flex flex-col gap-10 border-b border-black-5">
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="font-bold text-white-1">
                    Podcast Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Podcast Title"
                      className="input_class"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="font-bold text-white-1">
                    Podcast Category
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Category"
                      className="input_class"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="podcastDescription"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="font-bold text-white-1">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type a brief description of your podcast"
                      className="input_class"
                      rows={7}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col pt-10 mt-3">
            //TODO recordPodCast component
          </div>
          <div className="w-full mt-10">
            <Button
              type="submit"
              className="w-full bg-gold-1 text-black-1 font-extrabold hover:rounded-3xl transition-all duration-500"
            >
              {isSubmitting ? (
                <>
                  Submitting
                  <Loader className="ml-2 animate-spin" />
                </>
              ) : (
                "Submit and Publish Your Podcast"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreatePodcast;
