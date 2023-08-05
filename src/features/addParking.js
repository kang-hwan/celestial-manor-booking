import { createSlice } from "@reduxjs/toolkit";

// Initial Value
const initialStateValue = {
  enhancement: "Parking",
  isAdded: false,
  unitPrice: 80,
};

// Slide
export const parkingAddOnSlice = createSlice({
  name: "parkingAddOn",
  initialState: { value: initialStateValue },
  reducers: {
    addParking: (state) => {
      state.value.isAdded = !state.value.isAdded;
    },
  },
});

export const { addParking } = parkingAddOnSlice.actions;

export default parkingAddOnSlice.reducer;
