import React from "react";

function DatePickerPage() {
  return (
    <div id="datePickerPage">
      <h1 className="pageHeader">Dates of Stay</h1>
      <div>
        <input className="datePicker" type="date" />
        <input className="datePicker" type="date" />
        <button className="btn-accent--fill ">update dates of stay</button>
      </div>
    </div>
  );
}

export default DatePickerPage;
