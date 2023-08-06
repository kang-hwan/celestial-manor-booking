import { createSlice } from "@reduxjs/toolkit";

// Initial Value
const initialStateValue = [
  {
    selectedRoom: "Select",
    roomIndex: null,
    unitPrice: 0,
    subtotal: 0,
  },
  {
    enhancement: "Breakfast",
    isAdded: false,
    unitPrice: 50,
    subtotal: 0,
  },
  {
    enhancement: "Special Surprise",
    isAdded: false,
    unitPrice: 280,
    subtotal: 0,
  },
  {
    enhancement: "Late Check-Out",
    isAdded: false,
    unitPrice: 145,
    subtotal: 0,
  },
  {
    enhancement: "Parking",
    isAdded: false,
    unitPrice: 50,
    subtotal: 0,
  },
  { totalPrice: 0 },
];

// Slice
export const receiptTotalSlice = createSlice({
  name: "receiptTotal",
  initialState: { value: initialStateValue },
  reducers: {
    // ! Room Reducers
    selectRoom: (state, action) => {
      state.value[0].selectedRoom = action.payload;
    },
    selectRoomIndex: (state, action) => {
      state.value[0].roomIndex = action.payload;
    },
    selectedRoomUnitPrice: (state, action) => {
      state.value[0].unitPrice = action.payload;
    },
    selectedRoomTotalPrice: (state, action) => {
      state.value[0].subtotal = action.payload;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },

    // ! Breakfast Reducers
    addBreakfast: (state, action) => {
      state.value[1].isAdded = true;
      state.value[1].subtotal = action.payload;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },
    removeBreakfast: (state) => {
      state.value[1].isAdded = false;
      state.value[1].subtotal = 0;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },

    // ! Special Surprise Reducers
    addSpecialSurprise: (state, action) => {
      state.value[2].isAdded = true;
      state.value[2].subtotal = action.payload;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },
    removeSpecialSurprise: (state) => {
      state.value[2].isAdded = false;
      state.value[2].subtotal = 0;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },

    // ! Late Check-Out Reducers
    addLateCheckOut: (state, action) => {
      state.value[3].isAdded = true;
      state.value[3].subtotal = action.payload;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },
    removeLateCheckOut: (state) => {
      state.value[3].isAdded = false;
      state.value[3].subtotal = 0;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },

    // ! Parking Reducers
    addParking: (state, action) => {
      state.value[4].isAdded = true;
      state.value[4].subtotal = action.payload;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },
    removeParking: (state) => {
      state.value[4].isAdded = false;
      state.value[4].subtotal = 0;
      state.value[5].totalPrice = calculateTotalPrice(state);
    },
  },
});

const calculateTotalPrice = (state) => {
  let total = 0;
  for (let i = 0; i < state.value.length - 1; i++) {
    total += state.value[i].subtotal || 0;
  }
  return total;
};

export const {
  selectRoom,
  selectRoomIndex,
  selectedRoomUnitPrice,
  selectedRoomTotalPrice,
  addBreakfast,
  removeBreakfast,
  addSpecialSurprise,
  removeSpecialSurprise,
  addLateCheckOut,
  removeLateCheckOut,
  addParking,
  removeParking,
} = receiptTotalSlice.actions;

export default receiptTotalSlice.reducer;
