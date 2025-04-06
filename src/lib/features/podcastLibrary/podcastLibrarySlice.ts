
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PodcastEpisodeType } from "@/src/types";


const initialState: PodcastEpisodeType = {
   podcastLibrary: []
 
}

export const podcastLibrarySlice = createSlice({
    name: "podcastLibrary",
    initialState,
    reducers: {
        addPodcastToLibrary: (state, action) => {            
            state.podcastLibrary.push(action.payload)
            
        },
        removePodcastFromLibrary: (state, action) => {
          state.podcastLibrary =  state.podcastLibrary.filter((podcast) => podcast.id !== action.payload)


        }
    }
})

export const { addPodcastToLibrary, removePodcastFromLibrary } = podcastLibrarySlice.actions;

export default podcastLibrarySlice.reducer;