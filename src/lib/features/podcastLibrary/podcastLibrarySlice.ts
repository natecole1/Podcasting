import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PodcastEpisodeType } from "@/src/types";


const initialState: PodcastEpisodeType = {
   podcastLibrary: localStorage.getItem("podcastLibrary") ? JSON.parse(localStorage.getItem("podcastLibrary") || "{}") : [] 
}

export const podcastLibrarySlice = createSlice({
    name: "podcastLibrary",
    initialState,
    reducers: {
        addPodcastToLibrary: (state, action) => {            
            state.podcastLibrary.push(action.payload)
            localStorage.setItem("podcastLibrary", JSON.stringify(state.podcastLibrary))
        },
        removePodcastFromLibrary: (state, action) => {
          state.podcastLibrary =  state.podcastLibrary.filter((podcast) => podcast.id !== action.payload)
          console.log(state.podcastLibrary);
          localStorage.setItem(
            "podcastLibrary",
            JSON.stringify(state.podcastLibrary)
          ); 
          console.log(state.podcastLibrary)
        }
    }
})

export const { addPodcastToLibrary, removePodcastFromLibrary } = podcastLibrarySlice.actions;

export default podcastLibrarySlice.reducer;