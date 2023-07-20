import { createSlice } from "@reduxjs/toolkit";

export const stepFormSlice = createSlice({
  name: "stepForm",
  initialState: { value: 1 },
  reducers: {
    nextStep: (state) => {
      state.value += 1;
    },
    prevStep: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
  },
});

export const { nextStep, prevStep } = stepFormSlice.actions;

export default stepFormSlice.reducer;
