import { createSlice } from "@reduxjs/toolkit";

export const userName = createSlice ({
  name: 'username',
  initialState: {
    value: ""
  },
  reducers : {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const {setUser, setUserFromEvent} = userName.actions;
export default userName.reducer;
