import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  fName: "",
  lName: "",
  mobile: "",
  email: "",
  address: "",
  message: "",
};

export const guestInfoSlice = createSlice({
  name: "guestInfo",
  initialState: { value: initialStateValue },
  reducers: {
    updateFirstName: (state, action) => {
      state.value.fName = action.payload;
    },
    updateLastName: (state, action) => {
      state.value.lName = action.payload;
    },
    updateMobile: (state, action) => {
      state.value.mobile = action.payload;
    },
    updateEmail: (state, action) => {
      state.value.email = action.payload;
    },
    updateAddress: (state, action) => {
      state.value.address = action.payload;
    },
    updateMessage: (state, action) => {
      state.value.message = action.payload;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateMobile,
  updateEmail,
  updateAddress,
  updateMessage,
} = guestInfoSlice.actions;

export default guestInfoSlice.reducer;
