import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characters: {
      page: 1,
    },

    sortBy: "popular",
  },
  reducers: {
    setAllFiltersCharacters: (state: any, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setAllFiltersCharacters } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
