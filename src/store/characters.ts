import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characters: {
      page: 1,
      search: "",
      gender: "",
      specie: "",
      status: "",
    },
  },
  reducers: {
    setAllFiltersCharacters: (state: any, action) => {
      state.characters = action.payload;
    },
    clearAllFilters: (state: any) => {
      state.characters = {
        page: 1,
        search: "",
        gender: "",
        specie: "",
        status: "",
      };
    },
  },
});

export const { setAllFiltersCharacters, clearAllFilters } =
  characterSlice.actions;
export const characterReducer = characterSlice.reducer;
