'use client'
import React from "react";
import Searchbar from "@/src/components/ui/Searchbar";
import HomePagePodcastGallery from "@/src/components/ui/HomePagePodcastGallery";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const page = () => {
   
  return (
    <div className="flex flex-col items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Input className="w-full pl-5 bg-black-1 border-none" placeholder="Search for Podcasts" />
          </Button>
        </DialogTrigger>
        <DialogContent className="text-white-1 bg-black-1 border-none w-3/4 h-1/2 p-4 overflow-auto no-scrollbar flex flex-col">
          <DialogHeader>
            <DialogTitle className="sr-only">Search Modal</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div>
              <Searchbar />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <HomePagePodcastGallery />
    </div>
  );
};

export default page;


