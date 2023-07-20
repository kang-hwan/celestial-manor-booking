import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  adults: 1,
  children: 0,
};

export const visitorSlice = createSlice({
  name: "visitor",
  initialState: { value: initialStateValue },
  reducers: {
    adultIncrement: (state) => {
      if (state.value.adults + state.value.children < 8) {
        state.value.adults += 1;
      }
    },
    adultDecrement: (state) => {
      if (state.value.adults > 1) {
        state.value.adults -= 1;
      }
    },
    childIncrement: (state) => {
      if (state.value.adults + state.value.children < 8) {
        state.value.children += 1;
      }
    },
    childDecrement: (state) => {
      if (state.value.children > 0) {
        state.value.children -= 1;
      }
    },
  },
});

export const {
  adultIncrement,
  adultDecrement,
  childIncrement,
  childDecrement,
} = visitorSlice.actions;

export default visitorSlice.reducer;
