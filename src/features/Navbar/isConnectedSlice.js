import { createSlice } from "@reduxjs/toolkit";

export const isConnected = createSlice ({
  name: 'isConnected',
  initialState: {
    status: false
  },
  // A CHANGER SELON LE PROJET
  reducers : {
    connection: (state) => {state.status = true},
    deconnection: (state) => {state.status = false}
  }
})

export const {connection, deconnection} = isConnected.actions
export default isConnected.reducer