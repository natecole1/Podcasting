'use client'
import React, { useState } from "react";
import { useGetTopPodcastsByGenresQuery } from "@/src/lib/features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateGenre } from "@/src/lib/features/podcastGenre/podcastGenreSlice";
import { RootState } from "@/src/lib/store";
import { browseCategoriesOptions } from "@/src/constants";
import BrowseCategoryCard from "@/src/components/ui/BrowseCategoryCard";
import Link from "next/link";

const Browse = () => {
  const genre = useSelector((state: RootState) => state.podcastGenre.value)
  const dispatch = useDispatch();

  const {data: podcasts} = useGetTopPodcastsByGenresQuery(genre);
  console.log(podcasts);


  const handleClick = (genre: string): void => {
    dispatch(updateGenre(genre.toUpperCase()))
   
  }


  return (
    <div className="w-full">
      <h1 className="font-bold text-gold-1 text-20">Browse Podcasts by Category</h1>;
      <div className="w-full grid md:grid-cols-3 xl:grid-cols-4 place-content-center gap-x-6 gap-y-6 mt-8 xl:mt-12">
        {browseCategoriesOptions.map((category) => {
          return (
            <div key={category.genre} className="w-48  ">
              <Link href={`/browse/browse-podcasts/${genre}`}>
                <BrowseCategoryCard
                  displayGenre={category.displayGenre}
                  color={category.color}
                  onClick={() => handleClick(category.genre)}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Browse;

