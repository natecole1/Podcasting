import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,    
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    });
}



export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<AppStore['getState']>;
