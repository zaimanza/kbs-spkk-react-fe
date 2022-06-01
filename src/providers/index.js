import { configureStore } from "@reduxjs/toolkit";
import kelabProvider from "./kelabProvider";

export const store = configureStore({
    reducer: {
        kelab: kelabProvider,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
