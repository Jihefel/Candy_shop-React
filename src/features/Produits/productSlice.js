import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data/data.json"

export const cardSlice = createSlice ({
  name: 'selectedProduct',
  initialState: {
    value: data.bonbons
  },
  reducers : {}
})

export default cardSlice.reducer
