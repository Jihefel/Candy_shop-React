import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice ({
  name: 'articles',
  initialState: {
    items: []
  },
  // A CHANGER SELON LE PROJET
  reducers: {
    addArticle: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    },
    deleteArticle: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      }
    }
  }
  
  
})

export const {addArticle, deleteArticle} = articlesSlice.actions
export default articlesSlice.reducer