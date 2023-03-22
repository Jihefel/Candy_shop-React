import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/productSlice.js";
import navbarSlice from "../features/navbarSlice.js";

export const store = configureStore({
  reducer: {
      selectedProduct: cardSlice,
      isHome: navbarSlice
  }
})
