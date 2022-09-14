import { configureStore } from "@reduxjs/toolkit";
import LCSlice from "./slices/LCSlice";
import MentorsSlice from "./slices/MentorsSlice";

export const store = configureStore({
  reducer: {
    LCSlice,
    MentorsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
