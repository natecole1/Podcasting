import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";

import playReducer from './features/play/playSlice';
import displayAudioPlayerReducer from './features/displayAudioPlayer/displayAudioPlayerSlice';
import podcastGenreReducer from './features/podcastGenre/podcastGenreSlice';
import podcastLibraryReducer from './features/podcastLibrary/podcastLibrarySlice';
import podcastSearchInputReducer from './features/podcastSearchInput/podcastSearchInputSlice';


export const makeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,    
            isPlaying: playReducer,
            isAudioPlayerDisplayed: displayAudioPlayerReducer,
            podcastGenre: podcastGenreReducer,
            podcastLibrary: podcastLibraryReducer,
            podcastSearch: podcastSearchInputReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware),
    });
}



export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<AppStore['getState']>;

