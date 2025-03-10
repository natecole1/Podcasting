import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PodcastGenreType {
    value: string;
}

const initialState: PodcastGenreType = {
    value: ''
}

export const podcastGenreSlice = createSlice({
    name: "podcastGenre",
    initialState,
    reducers: {
        updateGenre: (state, action) => {
            const genre  = action.payload;
            state.value = genre;
        }
    }
})

export const { updateGenre } = podcastGenreSlice.actions

export default podcastGenreSlice.reducer