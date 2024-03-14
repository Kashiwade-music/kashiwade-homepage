import { createSlice } from "@reduxjs/toolkit";

// section index state
// reducer can be used to change the state like this: 0 -> 1 or 0 -> 2

export const sectionSlice = createSlice({
  name: "section",
  initialState: {
    value: 0,
  },
  reducers: {
    changeSection: (state, action) => {
      state.value = action.payload;
    },
  },
});
