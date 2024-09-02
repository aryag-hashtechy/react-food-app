import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartCount: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    createCart: (state, action) => {
      state.cart = action.payload.rows.map(data => data.food_id)
      state.cartCount = action.payload.count
    },

    addToCart: (state, action) => {
      state.cart.push(action.payload)
      state.cartCount ++
    },

    deleteCart: (state, action) => {
      state.cart = state.cart.filter(data => data !== action.payload)
      state.cartCount --
    },
  },
})

export const { createCart, addToCart, deleteCart } = cart.actions
export default cart.reducer;