import { createSlice } from "@reduxjs/toolkit";

interface ILayout {
  layout: string;
}

const layoutSlice = createSlice({
  name: "layouts",
  initialState: {
    layout: "square",
  },
  reducers: {
    setLayouts: (state: ILayout, action) => {
      state.layout = action.payload;
    },
  },
});

export const { setLayouts } = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;
