import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PodcastGenreType } from "@/src/types";


const initialState: PodcastGenreType = {
    value: ''
}

export const podcastSearchInputSlice = createSlice({
    name: "podcastSearch",
    initialState,
    reducers: {
        searchInput: (state, action) => {
            const genre  = action.payload;
            state.value = genre;
        }
    }
})

export const { searchInput } = podcastSearchInputSlice.actions

export default podcastSearchInputSlice.reducer