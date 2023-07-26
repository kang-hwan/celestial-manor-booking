import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  selectedRoom: "Select",
};

export const roomSelectionSlice = createSlice({
  name: "roomSelection",
  initialState: { value: initialStateValue },
  reducers: {
    updateRoom: (state, action) => {
      state.value.selectedRoom = action.payload;
    },
  },
});

export const { updateRoom } = roomSelectionSlice.actions;

export default roomSelectionSlice.reducer;
