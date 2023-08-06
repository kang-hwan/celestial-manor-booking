import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../features/formStep";
import {
  updateEndDate,
  updateStartDate,
  updateTotalNights,
} from "../features/lengthOfStay";

function DatePickerPage() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const extractDateAndMonth = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };

  const calculateDateDifference = () => {
    if (startDate && endDate) {
      const date1 = new Date(startDate);
      const date2 = new Date(endDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    } else {
      alert("Please select both start and end dates.");
      return null;
    }
  };

  const handleButtonClick = () => {
    const startDateDM = extractDateAndMonth(startDate);
    const endDateDM = extractDateAndMonth(endDate);

    if (startDate && endDate) {
      dispatch(updateStartDate(startDateDM));
      dispatch(updateEndDate(endDateDM));
      dispatch(updateTotalNights(calculateDateDifference()));
      dispatch(nextStep());
    } else {
      alert("Please select both start and end dates.");
    }
  };

  const tomorrow = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  };

  const maxEndDate = () => {
    if (startDate) {
      const start = new Date(startDate);
      start.setDate(start.getDate() + 28);
      return start.toISOString().split("T")[0];
    }
    return null;
  };

  return (
    <div id="datePickerPage">
      <h1 className="pageHeader">Dates of Stay</h1>
      <div>
        <input
          className="datePicker"
          type="date"
          min={tomorrow()}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="datePicker"
          type="date"
          min={
            startDate ? new Date(startDate).toISOString().split("T")[0] : null
          }
          max={maxEndDate()}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="btn-accent--fill"
          onClick={() => handleButtonClick()}
        >
          update dates of stay
        </button>
      </div>
    </div>
  );
}

export default DatePickerPage;
