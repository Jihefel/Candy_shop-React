import { createSlice } from "@reduxjs/toolkit";

export const isOnHomePage = createSlice ({
  name: 'isHome',
  initialState: {
    value: true
  },
  reducers : {
    goOther: (state) => {state.value = false},
    goHome: (state) => {state.value = true}
  }
})

export const {goOther, goHome} = isOnHomePage.actions
export default isOnHomePage.reducer