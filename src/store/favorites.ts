import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state: any, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state: any, action) => {
      const favorites = state.favorites.filter(
        (item, index) => state.favorites.indexOf(item) === index
      );
      state.favorites = [...favorites, action.payload];
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, action.payload])
      );
    },
    removeFavorite: (state: any, action) => {
      state.favorites = state.favorites.filter(function (item) {
        return item !== action.payload;
      });
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
