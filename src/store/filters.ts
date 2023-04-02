import { createSlice } from "@reduxjs/toolkit";

interface IFilters {
  characters: {
    page: number;
    search: string;
    gender: string;
    specie: string;
    status: string;
  };
}

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
    setAllFiltersCharacters: (state: IFilters, action) => {
      state.characters = action.payload;
    },
    clearAllFilters: (state: IFilters) => {
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
