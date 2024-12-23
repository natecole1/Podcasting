'use client'
import React from "react";
import { apiSlice, useGetTopPodcastsByCountryQuery } from "@/src/lib/features/api/apiSlice";
import { TaddyArgType } from "@/src/types";

const page = () => {
  const { data } = useGetTopPodcastsByCountryQuery();
  console.log(data);


  return <div>page</div>;
};

export default page;


