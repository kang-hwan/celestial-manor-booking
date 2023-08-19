import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const confirmCheckOutSlice = createSlice({
  name: "confirmCheckOut",
  initialState: { value: initialStateValue },
  reducers: {
    checkOutProcessed: (state) => {
      state.value = !state.value;
    },
  },
});

export const { checkOutProcessed } = confirmCheckOutSlice.actions;

export default confirmCheckOutSlice.reducer;
