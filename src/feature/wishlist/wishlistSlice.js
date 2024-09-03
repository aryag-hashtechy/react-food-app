import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    createWishlist: (state, action) => {
      state.wishlist = action.payload.map(data => data.food_id)
    },

    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload)
    },

    deleteWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(draft => draft !== Number(action.payload))
    },

    clearWishlist: (state, action) => {
      state.wishlist = [];
    }
  },
});

export const { addToWishlist, createWishlist, deleteWishlist, clearWishlist } = wishlistSlice?.actions;
export default wishlistSlice.reducer;
