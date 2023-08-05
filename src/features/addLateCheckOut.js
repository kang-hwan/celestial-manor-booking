import { createSlice } from "@reduxjs/toolkit";

// Initial Value
const initialStateValue = {
  enhancement: "Late Check-Out",
  isAdded: false,
  unitPrice: 80,
};

// Slide
export const lateCheckOutAddOnSlice = createSlice({
  name: "lateCheckOutAddOn",
  initialState: { value: initialStateValue },
  reducers: {
    addLateCheckOut: (state) => {
      state.value.isAdded = !state.value.isAdded;
    },
  },
});

export const { addLateCheckOut } = lateCheckOutAddOnSlice.actions;

export default lateCheckOutAddOnSlice.reducer;
