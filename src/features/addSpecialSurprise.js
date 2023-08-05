import { createSlice } from "@reduxjs/toolkit";

// Initial Value
const initialStateValue = {
  enhancement: "Special Surprise",
  isAdded: false,
  unitPrice: 100,
};

// Slide
export const surpriseAddOnSlice = createSlice({
  name: "surpriseAddOn",
  initialState: { value: initialStateValue },
  reducers: {
    addSpecialSurprise: (state) => {
      state.value.isAdded = !state.value.isAdded;
    },
  },
});

export const { addSpecialSurprise } = surpriseAddOnSlice.actions;

export default surpriseAddOnSlice.reducer;
