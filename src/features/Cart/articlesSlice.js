import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice ({
  name: 'articles',
  initialState: {
    items: []
  },
  // A CHANGER SELON LE PROJET
  reducers : {
    addArticle: (state, action) => {state.value = state.push(action.payload)},
    deleteArticle: (state, action) => {state.value = state - 1}
  }
})

export const {addArticle, deleteArticle} = articlesSlice.actions
export default articlesSlice.reducer