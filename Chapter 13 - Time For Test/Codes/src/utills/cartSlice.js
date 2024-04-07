import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem, removeItem, clearCart are reducer functions but these are just mapped to the actions.
    //actions : reducer functions
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

console.log(cartSlice.reducer);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
