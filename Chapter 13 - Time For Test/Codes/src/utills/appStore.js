import { configureStore } from "@reduxjs/toolkit";
//Inside configureStore there are slices,

import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
