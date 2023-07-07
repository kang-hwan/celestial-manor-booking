import React, { useState } from "react";

function GuestPickerPage() {
  // adult counter
  const [adult, setAdult] = useState(1);

  const adultIncrement = () => {
    setAdult(adult + 1);
  };

  const adultDecrement = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };

  //   children counter
  const [children, setChildren] = useState(0);

  const childrenIncrement = () => {
    setChildren(children + 1);
  };

  const childrenDecrement = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  return (
    <div id="guestPickerPage">
      <h1 className="pageHeader">Guests & Rooms</h1>
      <div className="formField">
        <div className="guestCounterField">
          <p>{adult} Adults</p>
          <div className="counterBtnContainer">
            <button className="counterBtn" onClick={() => adultIncrement()}>
              +
            </button>
            <button className="counterBtn" onClick={() => adultDecrement()}>
              -
            </button>
          </div>
        </div>
        <div className="guestCounterField">
          <p>{children} Children</p>
          <div className="counterBtnContainer">
            <button className="counterBtn" onClick={() => childrenIncrement()}>
              +
            </button>
            <button className="counterBtn" onClick={() => childrenDecrement()}>
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
