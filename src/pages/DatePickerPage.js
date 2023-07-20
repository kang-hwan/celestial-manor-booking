import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../features/formStep";

function DatePickerPage() {
  const dispatch = useDispatch();

  return (
    <div id="datePickerPage">
      <h1 className="pageHeader">Dates of Stay</h1>
      <div>
        <input className="datePicker" type="date" />
        <input className="datePicker" type="date" />
        <button
          className="btn-accent--fill"
          onClick={() => dispatch(nextStep())}
        >
          update dates of stay
        </button>
      </div>
    </div>
  );
}

export default DatePickerPage;
