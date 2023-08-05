import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import visitorReducer from "./features/visitor";
import stepFormReducer from "./features/formStep";
import lengthOfStayReducer from "./features/lengthOfStay";
import roomSelectionReducer from "./features/roomSelection";
import breakfastAddOnReducer from "./features/addBreakfast";
import surpriseAddOnReducer from "./features/addSpecialSurprise";
import lateCheckOutAddOnReducer from "./features/addLateCheckOut";
import parkingAddOnReducer from "./features/addParking";
import enhancementSubtotalReducer from "./features/enhancementSubtotal";
import receiptTotalReducer from "./features/receiptTotal";
// import cartTotalReducer from "./features/cartTotal";

// TODO: Calendar Restriction
// TODO: Fix Add Enhancement Conditional Rendering
// TODO: Styling on BOOK NOW button when card selected
// TODO: Update images
// TODO: Last personal detail section
// TODO: Stepper animation on header

const store = configureStore({
  reducer: {
    visitor: visitorReducer,
    stepForm: stepFormReducer,
    lengthOfStay: lengthOfStayReducer,
    roomSelection: roomSelectionReducer,
    breakfastAddOn: breakfastAddOnReducer,
    surpriseAddOn: surpriseAddOnReducer,
    lateCheckOutAddOn: lateCheckOutAddOnReducer,
    parkingAddOn: parkingAddOnReducer,
    enhancementSubtotal: enhancementSubtotalReducer,
    receiptTotal: receiptTotalReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
