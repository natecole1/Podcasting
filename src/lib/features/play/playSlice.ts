import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface isPlayingState {
    value: boolean
}

const initialState: isPlayingState = {
    value: false,
}

export const playSlice = createSlice({
    name: 'isPlaying',
    initialState,
    reducers: {
       toggleIsPlaying: (state) => {
        state.value = !state.value
       },
      
    }
})

export const { toggleIsPlaying } = playSlice.actions

export default playSlice.reducer