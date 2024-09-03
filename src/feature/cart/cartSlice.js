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

    clearCart: (state, action) => {
      state.cart = []
      state.cartCount = 0
    }
  },
})

export const { createCart, addToCart, deleteCart, clearCart } = cart.actions
export default cart.reducer;