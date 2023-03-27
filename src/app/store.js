import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/Produits/productSlice.js";
import isOnHomePage from '../features/Navbar/isOnHomePage';
import userName from './../features/Navbar/userName';
import articlesSlice from '../features/Cart/articlesSlice';
import isConnectedSlice from "../features/Navbar/isConnectedSlice.js";

export const store = configureStore({
  reducer: {
      selectedProduct: cardSlice,
      isHome: isOnHomePage,
      username: userName,
      articles: articlesSlice,
      isConnected: isConnectedSlice,
  }
})
