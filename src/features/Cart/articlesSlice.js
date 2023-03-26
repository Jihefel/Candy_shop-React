import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    items: [],
  },
  // A CHANGER SELON LE PROJET
  reducers: {
    addArticle: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(item => item[1].id === itemToAdd[1].id);
      if (existingItem) {
        existingItem[1].quantity += 1;
      } else {
        state.items.push(itemToAdd);
      }
    },
    decrementQuantity: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(item => item[1].id === itemToAdd[1].id);
      if (existingItem) {
        existingItem[1].quantity -= 1;
      }
    },
    deleteArticle: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item[1].id !== action.payload),
      };
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addArticle, decrementQuantity, deleteArticle, emptyCart } = articlesSlice.actions;
export default articlesSlice.reducer;
