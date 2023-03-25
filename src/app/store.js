import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/Produits/productSlice.js";
import isOnHomePage from '../features/Navbar/isOnHomePage';
import userName from './../features/Navbar/userName';
import numberArticleSlice from "../features/Navbar/numberArticle.js";
import articlesSlice from './../features/Cart/articlesSlice';
import isConnectedSlice from "../features/Navbar/isConnectedSlice.js";

export const store = configureStore({
  reducer: {
      selectedProduct: cardSlice,
      isHome: isOnHomePage,
      username: userName,
      numberArticle: numberArticleSlice,
      articles: articlesSlice,
      isConnected: isConnectedSlice,
  }
})
