import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const { id } = action.payload;
      if (!state.ids.includes(id)) {
        state.ids.push(id);
      }
    },
    removeFavorite: (state, action) => {
      const { id } = action.payload;
      state.ids = state.ids.filter((favoriteId) => favoriteId !== id);
    },
  },
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
