import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/product/productSlice.js";

export const store = configureStore({
  reducer: {
      card: cardSlice
  }
})
