import { createSlice } from "@reduxjs/toolkit";

export const numberArticleSlice = createSlice ({
  name: 'numberArticle',
  initialState: {
    value: 0
  },
  // A CHANGER SELON LE PROJET
  reducers : {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1}
  }
})

export const {increment, decrement} = numberArticleSlice.actions
export default numberArticleSlice.reducer