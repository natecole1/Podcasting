'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/src/lib/utils';
import React, { useState, useRef } from 'react'
import { Label } from './label';
import { Textarea } from '@/components/ui/textarea';
import { Loader } from 'lucide-react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { GenerateThumbnailProps } from '@/src/types';
import { useAction, useMutation } from 'convex/react';

import { useUploadFiles} from '@xixixao/uploadstuff/react';
import { api } from '@/convex/_generated/api';
import { toast } from '@/components/ui/use-toast';
import { v4 as uuidv4} from 'uuid';

const GenerateThumbnail = ({image, setImage, imagePrompt, setImagePrompt, setImageStorageId}: GenerateThumbnailProps) => {
    const [ isThumbnail, setIsThumbnail ] = useState(false);
   
    const [ isImageLoading, setIsImageLoading ] = useState(false);
    const imageRef = useRef<HTMLInputElement>(null);
    const handleGenerateThumbnail = useAction(api.openai.generateThumbnailAction)
    const generateUploadUrl = useMutation(api.files.generateUploadUrl)
    const { startUpload } = useUploadFiles(generateUploadUrl)
    const getImageUrl = useMutation(api.podcasts.getUrl)

    const handleImageSourceClick = () => {
        setIsThumbnail(prev => !prev);
    }

    const generateImage = async () => {
      setIsImageLoading(true);
      try {
        const response = await handleGenerateThumbnail({prompt: imagePrompt});
        const blob = new Blob([response], {type: 'image/png'});
        handleImage(blob, `thumbnail-${uuidv4()}`)

        setIsImageLoading(false);
      } catch (error) {
        console.log(error);
        toast({
          title: "Error generating thumbnail",
          variant: "destructive"
        })

        setIsImageLoading(false);
      }
    }

    const handleImage = async (blob: Blob, fileName: string) => {
      
      setImage('');

      try {
        const file = new File([blob], fileName, {type: 'image/png'});

        const uploaded = await startUpload([file]);
        const storageId = (uploaded[0].response as any).storageId;

        setImageStorageId(storageId);

        const imageUrl = await getImageUrl({storageId});
        setImage(imageUrl!)
        
        toast({
          title: "Podcast thumbnail generated successfully",
          variant: "success"
        })

      } catch (error) {
        console.log(error);
        toast({
          title: 'Error occurred while generating thumbnail',
          variant: "destructive"
        })
      }
    }

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
          const files = e.target.files;
          if(!files) return;
          const file = files[0];
          const blob = await file.arrayBuffer().then((a) => new Blob([a]));

          handleImage(blob, file.name);
        } catch (error) {
          console.log(error);
          toast({
            title: "Error occurred during upload",
            variant: "destructive"
          })
        }
    }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 h-24 items-center justify-center">
        <Button
          type="button"
          variant="outline"
          onClick={handleImageSourceClick}
          className={cn("w-60 rounded-3xl text-white-1", {
            "bg-gold-1 text-black-1 ": isThumbnail,
          })}
        >
          Generate thumbnail with AI
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleImageSourceClick}
          className={cn("w-60 rounded-3xl text-white-1", {
            "bg-gold-1 text-black-1": !isThumbnail,
          })}
        >
          Upload image from your computer
        </Button>
      </div>
      <div className='my-10 xl:my-20'>
        {isThumbnail ? (
            <div className='flex flex-col gap-4'>
                <Label className='text-white-1 font-bold'>Prompt for AI-generated thumbnail</Label>
                <Textarea 
                 rows={5}
                 placeholder="Type a detailed prompt for an AI-generated Thumbnail"
                 value={imagePrompt}
                 onChange={(e) => setImagePrompt(e.target.value)}
                 className="rounded-md bg-black-2 border-none text-white-1"
                />
                <div className='w-full flex-center my-3'>
                   <Button 
                    type='button'
                    variant="outline"
                    onClick={generateImage}
                    className='w-60 text-white-1 rounded-3xl bg-green-500'
                   >
                    {isImageLoading ? <Loader className='animate-spin w-10' /> : "Generate"}
                    </Button> 
                </div>
            </div>
            
        ) : (
            <div className='bg-black-2 w-full h-40 flex flex-col items-center justify-center text-white-1 rounded-md cursor-pointer' onClick={() => imageRef?.current?.click()}>
                <Input 
                  type="file"
                  className="hidden"
                  ref={imageRef}
                  onChange={(e) => uploadImage(e)}
                />
               {!isImageLoading ? <AiOutlineCloudUpload className='w-10 h-10'/> : <Loader className='animate-spin w-20' />} 
               <div className='flex flex-col items-center justify-center'>
                <h2 className="text-gold-1">Click to Upload an Image</h2>
                <p>PNG, SVG, JPG, or GIF(max. 1080 x 1080px) </p>
               </div>
            </div>
        )}
        {image && (
            <div className='w-full flex-center'>
                <Image 
                 src={image}
                 alt="podcast thumbnail"
                 width={150}
                 height={150}
                />
            </div>
        )}
      </div>
    </>
  );
}

export default GenerateThumbnail