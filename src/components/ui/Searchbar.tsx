'use client'
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from '@/components/ui/input';

const testArray = ['abigail', 'maria', 'gabby', 'haley', 'lake']


const Searchbar = ({ value }: any) => {
  const [userInput, setUserInput ] =useState('');
  const [searchResults, setSearchResults ] = useState<string[]>([]);


   const filteredResults = testArray.filter((word) => {
     return word.toLowerCase().includes(userInput);
   });

   const handleSearch = (term: string) => {
      setUserInput(term);
   }

  return (
    <div className='w-full'>
      <div className='relative w-[80%] m-auto'>
          <AiOutlineSearch className='absolute left-2 top-3 md:left-4 size-5 text-white-1' />
          <Input
          className='pl-9  md:pl-12 bg-black-1 border-none border-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 focus-visible:ring-0 w-full text-white-1'
          placeholder='Search for podcasts'
          type='text'
         
          onChange={(e) => handleSearch(e.target.value)}
          />
          {
            userInput && (
              <div className="absolute bg-black-1 w-full text-white-1 mt-1 rounded-lg p-2 max-h-48 z-10">
              {
                  filteredResults.map((searchWord, index) => {
                    return(
                      <div key={index} className="w-full gap-2 p-2 hover:bg-black-3 cursor-pointer">
                        {searchWord}
                      </div>
                    )
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