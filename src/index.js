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
import enhancementSubtotalReducer from "./features/enhancementSubtotal";
import receiptTotalReducer from "./features/receiptTotal";
import guestInfoReducer from "./features/guestInfo";
import confirmCheckOutReducer from "./features/confirmCheckOut";

//-- TODO: Stepper animation on header
//-- TODO: Styling on BOOK NOW button when card selected
//-- TODO: Calendar Restriction
//-- TODO: Last personal detail section
//-- TODO: fix card image size
//-- TODO: Update images
//-- TODO: Fix Add Enhancement Conditional Rendering
//-- TODO: Fill button fix
// TODO: Scroll Event
// TODO: Price Comma
// TODO: Final Confirmation PopUp
// ! 보류 TODO: header clickable steps

// ? Receipt Section Enhancement Qty

const store = configureStore({
  reducer: {
    visitor: visitorReducer,
    stepForm: stepFormReducer,
    lengthOfStay: lengthOfStayReducer,
    roomSelection: roomSelectionReducer,
    enhancementSubtotal: enhancementSubtotalReducer,
    receiptTotal: receiptTotalReducer,
    guestInfo: guestInfoReducer,
    confirmCheckOut: confirmCheckOutReducer,
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
