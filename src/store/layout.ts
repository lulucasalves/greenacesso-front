import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layouts",
  initialState: {
    layout: 'square'
  },
  reducers: {
    setLayouts: (state: any, action) => {
      state.layout = action.payload;
    },
  },
});

export const { setLayouts } = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;
