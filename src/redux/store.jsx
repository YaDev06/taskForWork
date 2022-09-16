import { configureStore } from "@reduxjs/toolkit";
import LCSlice from "./slices/LCSlice";
import MentorsSlice from "./slices/MentorsSlice";
import ModalSlice from "./slices/ModalSlice";

export const store = configureStore({
  reducer: {
    LCSlice,
    MentorsSlice,
    ModalSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
