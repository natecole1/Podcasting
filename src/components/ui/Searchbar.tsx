'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import useDebounce from '@/src/hooks';
import { useGetPodcastSearchResultsQuery } from '@/src/lib/features/api/apiSlice';
import Link from 'next/link';
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { searchInput } from '@/src/lib/features/podcastSearchInput/podcastSearchInputSlice';


const Searchbar = () => {
  const [value, setValue ] =useState('');
  const debouncedInput = useDebounce(value, 600);

  const dispatch = useDispatch();
  dispatch(searchInput(debouncedInput))

  const { data:podcasts, isLoading} = useGetPodcastSearchResultsQuery(debouncedInput);

  console.log(podcasts)
  
  return (
    <div className='w-full'>
      <div className='relative w-[80%] m-auto'>
          <AiOutlineSearch className='absolute left-2 top-3 md:left-4 size-5 text-white-1' />
          <Input
            className='pl-9 md:pl-12 bg-black-1 border-none border-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 focus-visible:ring-0 w-full text-white-1'
            placeholder='Search for podcasts'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {
            value && (
              <div className="w-full flex flex-col justify-start items-center gap-4 text-white-1 p-2 my-4 max-h-48 ">
              {
                  podcasts?.search.podcastSeries.map((podcast) => {
                    return (
                      <div key={podcast.uuid} className=' w-full flex justify-start items-center gap-2 '>
                        <Link
                          href={`/search-results/${podcast.uuid}`}
                        >
                          <div className="flex flex-col justify-center items-center ">
                            <img
                              src={podcast.imageUrl}
                              alt="podcast image"
                              width={60}
                              height={60}
                              className=" min-w-20 w-15 rounded-lg hover:shadow-custom-sm-light hover:-translate-y-1 duration-300 ease-in"
                            />
                            
                          </div>
                        </Link>
                        <div className=" flex flex-col justify-center items-start pl-2 gap-2">
                          <h1 className="text-white-1">{podcast.name}</h1>
                          {/* <p className="text-xs text-white-2">
                            {podcast.itunesInfo.publisherName}
                          </p> */}
                        </div>
                      </div>
                    );
                  })
              }
              </div>
            )
          }
      </div>

    </div>
  )
}

export default Searchbar