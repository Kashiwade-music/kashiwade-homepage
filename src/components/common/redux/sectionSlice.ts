import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// section index state
// reducer can be used to change the state like this: 0 -> 1 or 0 -> 2

export const sectionSlice = createSlice({
  name: "section",
  initialState: {
    currentSection: 0,
    previousSection: 0,
    isSectionChanging: false,
  },
  reducers: {
    changeSectionTo: (state, action: PayloadAction<number>) => {
      state.previousSection = state.currentSection + 0;
      state.currentSection = action.payload + 0;
      state.isSectionChanging = true;
    },
    setSectionChanging: (state, action: PayloadAction<boolean>) => {
      state.isSectionChanging = action.payload;
    },
  },
});
