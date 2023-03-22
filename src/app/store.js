import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/productSlice.js";
import isOnHomePage from '../features/Navbar/isOnHomePage';
import userName from './../features/Navbar/userName';

export const store = configureStore({
  reducer: {
      selectedProduct: cardSlice,
      isHome: isOnHomePage,
      username: userName
  }
})
