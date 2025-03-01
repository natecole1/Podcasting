import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface isAudioPlayerDisplayed {
  value: boolean;
}

const initialState: isAudioPlayerDisplayed = {
  value: false,
};

export const displayAudioPlayerSlice = createSlice({
  name: "isAudioPlayerDisplayed",
  initialState,
  reducers: {
    displayAudioPlayer: (state) => {
      state.value = true;
    },
    closeAudioPlayer: (state) => {
        state.value = false;
    }
  },
});

export const { displayAudioPlayer, closeAudioPlayer } = displayAudioPlayerSlice.actions;

export default displayAudioPlayerSlice.reducer;
