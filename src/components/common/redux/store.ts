import { sectionSlice } from "./sectionSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
  },
});
