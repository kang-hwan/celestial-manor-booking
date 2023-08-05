import { createSlice } from "@reduxjs/toolkit";

// Initial Value
const initialStateValue = 0;
// Slide
export const enhancementSubtotalSlice = createSlice({
  name: "enhancementSubtotal",
  initialState: initialStateValue,
  reducers: {
    addEnhancement: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addEnhancement } = enhancementSubtotalSlice.actions;

export default enhancementSubtotalSlice.reducer;
