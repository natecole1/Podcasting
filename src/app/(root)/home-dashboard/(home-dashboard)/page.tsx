'use client'
import React from "react";

import Searchbar from "@/src/components/ui/Searchbar";
import HomePagePodcastGallery from "@/src/components/ui/HomePagePodcastGallery";


const page = () => {
   
  return(
    <div className="flex flex-col justify-center items-center">
      <Searchbar />
      <HomePagePodcastGallery />
    </div>
  );
};

export default page;


