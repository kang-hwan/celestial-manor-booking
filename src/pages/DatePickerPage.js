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

    dispatch(updateStartDate(startDateDM));
    dispatch(updateEndDate(endDateDM));
    dispatch(updateTotalNights(calculateDateDifference()));
    dispatch(nextStep());
  };

  return (
    <div id="datePickerPage">
      <h1 className="pageHeader">Dates of Stay</h1>
      <div>
        <input
          className="datePicker"
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="datePicker"
          type="date"
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
