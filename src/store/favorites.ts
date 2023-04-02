import { createSlice } from "@reduxjs/toolkit";

interface IFavorite {
  favorites: number[];
}

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state: IFavorite, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state: IFavorite, action) => {
      const favorites = state.favorites.filter(
        (item, index) => state.favorites.indexOf(item) === index
      );
      state.favorites = [...favorites, action.payload];
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, action.payload])
      );
    },
    removeFavorite: (state: IFavorite, action) => {
      const filtered = state.favorites.filter((item) => {
        return item !== action.payload;
      });

      state.favorites = filtered;
      localStorage.setItem("favorites", JSON.stringify(filtered));
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
