import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import playReducer from './features/play/playSlice';
import displayAudioPlayerReducer from './features/displayAudioPlayer/displayAudioPlayerSlice';
import podcastGenreReducer from './features/podcastGenre/podcastGenreSlice';
import podcastLibraryReducer from './features/podcastLibrary/podcastLibrarySlice';
import podcastSearchInputReducer from './features/podcastSearchInput/podcastSearchInputSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedLibraryReducer = persistReducer(persistConfig, podcastLibraryReducer)

export const makeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,    
            isPlaying: playReducer,
            isAudioPlayerDisplayed: displayAudioPlayerReducer,
            podcastGenre: podcastGenreReducer,
            podcastLibrary: persistedLibraryReducer,
            podcastSearch: podcastSearchInputReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
                ignoreActions: ['persist/PERSIST', "persist/REHYDRATE"]
            
        }).concat(apiSlice.middleware),
    });
}



export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<AppStore['getState']>;

export const persistor = persistStore(makeStore());