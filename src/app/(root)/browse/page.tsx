'use client'
import React from "react";
import { useGetTopPodcastsByGenresQuery } from "@/src/lib/features/api/apiSlice";

const Browse = () => {

  const {data: podcasts} = useGetTopPodcastsByGenresQuery();
  console.log(podcasts);
  

  return( 
    <div>
      <div className="w-48 h-20 bg-red-400 flex items-end justify-end p-2 rounded-2xl">
        <h2 className="text-md font-bold">Mathematics</h2>
      </div>
    </div>
  )
};

export default Browse;

// 4e883d98-43d1-4ac7-8de8-4afc13244393
// b4b19a01-fd23-46c7-a8dd-3ce31ed127c2
// b5ebbe3d-d2e0-43d1-ac41-cb2cb2f67a99