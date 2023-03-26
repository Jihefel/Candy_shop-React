import { createSlice } from "@reduxjs/toolkit";

export const numberArticleSlice = createSlice ({
  name: 'numberArticle',
  initialState: {
    value: 0
  },
  reducers : {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    zeroArticle: (state) => {state.value = 0}
  }
})

export const {increment, decrement, zeroArticle} = numberArticleSlice.actions
export default numberArticleSlice.reducer