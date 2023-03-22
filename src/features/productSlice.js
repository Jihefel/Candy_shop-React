import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json"

export const cardSlice = createSlice ({
  name: 'selectedProduct',
  initialState: {
    value: data.bonbons
  },
  // A CHANGER SELON LE PROJET
  reducers : {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1}
  }
})

export const {increment, decrement} = cardSlice.actions
export default cardSlice.reducer
