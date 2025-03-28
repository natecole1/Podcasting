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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { cn } from "@/src/lib/utils";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";


import { Loader } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import { browseCategoriesOptions } from "@/src/constants";
import GenerateThumbnail from "@/src/components/ui/GenerateThumbnail";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";




const formSchema = z.object({
  podcastTitle: z.string().min(2).max(50),
  podcastDescription: z.string().min(2).max(200),
});

const CreatePodcast = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagePrompt, setImagePrompt] = useState("");
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null
  );

  const [imageUrl, setImageUrl] = useState("");

  const createPodcast = useMutation(api.podcasts.createPodcast)

  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",

    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
  
    try {
    setIsSubmitting(true);
    if (!imageUrl) {
      toast({
        title: 'Please generate or upload an image thumbnail for your podcast',
        variant: 'default'
      });
      setIsSubmitting(false);
      throw new Error('No image provided')
    }

    const podcast = await createPodcast({
      podcastTitle: data.podcastTitle,
      podcastDescription: data.podcastDescription,
      imageUrl,
      imageStorageId: imageStorageId!
    })
    toast({
      title: "Podcast successfully created",
      variant: 'success'
    })
    setIsSubmitting(false);
    router.push('/create-podcast/create-episode')
   } catch (error) {
      console.log(error);
      toast({
        title: "Podcast submission failed",
        variant: 'destructive'
      });
      setIsSubmitting(false);
   }
    
  }

  return (
    <section className="flex flex-col mt-10">
      <h1 className="font-bold text-gold-1 text-20">Create Podcast</h1>;
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full mt-12"
        >
          <div className="flex flex-col gap-10 xl:gap-20">
            <div className="flex flex-col">
              <FormField
                control={form.control}
                name="podcastTitle"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 ">
                    <FormLabel className="font-bold text-white-1">
                      Podcast Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        
                        placeholder="Podcast Title"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col">
              <Label className="text-white-1 font-bold">Podcast Category</Label>
              <Select>
                <SelectTrigger className="w-full rounded-full my-4 border-none bg-white-1">
                  <SelectValue placeholder="Select a podcast category" />
                </SelectTrigger>
                <SelectContent className="bg-white-1">
                  <SelectGroup>
                    <SelectLabel>Podcast Category</SelectLabel>
                    {browseCategoriesOptions.map((category) => {
                      return (
                        <div className="w-full hover:bg-black-2 hover:text-white-1" key={category.displayGenre}>
                          <SelectItem value={category.displayGenre}>
                            {category.displayGenre}
                          </SelectItem>
                        </div>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
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
          <div className="flex flex-col pt-10 mt-3">
            <GenerateThumbnail 
              image={imageUrl}
              setImage={setImageUrl}
              imagePrompt={imagePrompt}
              setImagePrompt={setImagePrompt}
              setImageStorageId={setImageStorageId}
            />
          </div>
          <div className="w-full my-10">
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
                "Submit and Create Your Podcast"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreatePodcast;
