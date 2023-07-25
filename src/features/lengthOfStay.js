import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  startDate: null,
  endDate: null,
  totalNights: null,
};

export const lengthOfStaySlice = createSlice({
  name: "lengthOfStay",
  initialState: { value: initialStateValue },
  reducers: {
    updateStartDate: (state, action) => {
      state.value.startDate = action.payload;
    },
    updateEndDate: (state, action) => {
      state.value.endDate = action.payload;
    },
    updateTotalNights: (state, action) => {
      state.value.totalNights = action.payload;
    },
  },
});

export const { updateStartDate, updateEndDate, updateTotalNights } =
  lengthOfStaySlice.actions;

export default lengthOfStaySlice.reducer;
