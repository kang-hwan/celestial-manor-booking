import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adultDecrement,
  adultIncrement,
  childDecrement,
  childIncrement,
} from "../features/visitor";

function GuestPickerPage() {
  const adultCount = useSelector((state) => state.visitor.value.adults);
  const childrenCount = useSelector((state) => state.visitor.value.children);
  const dispatch = useDispatch();

  return (
    <div id="guestPickerPage">
      <h1 className="pageHeader">Guests & Rooms</h1>
      <div className="formField">
        <div className="guestCounterField">
          <p>{adultCount} Adults</p>
          <div className="counterBtnContainer">
            <button
              className="counterBtn"
              onClick={() => dispatch(adultIncrement())}
            >
              +
            </button>
            <button
              className="counterBtn"
              onClick={() => dispatch(adultDecrement())}
            >
              -
            </button>
          </div>
        </div>
        <div className="guestCounterField">
          <p>{childrenCount} Children</p>
          <div className="counterBtnContainer">
            <button
              className="counterBtn"
              onClick={() => dispatch(childIncrement())}
            >
              +
            </button>
            <button
              className="counterBtn"
              onClick={() => dispatch(childDecrement())}
            >
              -
            </button>
          </div>
        </div>
        <button className="btn-accent--fill ">update guest & rooms</button>
      </div>
    </div>
  );
}

export default GuestPickerPage;
