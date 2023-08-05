import { createSlice } from "@reduxjs/toolkit";

// Initial Value
const initialStateValue = {
  enhancement: "Breakfast",
  isAdded: false,
  unitPrice: 80,
};
// Slide
export const breakfastAddOnSlice = createSlice({
  name: "breakfastAddOn",
  initialState: { value: initialStateValue },
  reducers: {
    addBreakfast: (state) => {
      state.value.isAdded = !state.value.isAdded;
    },
  },
});

export const { addBreakfast } = breakfastAddOnSlice.actions;

export default breakfastAddOnSlice.reducer;
