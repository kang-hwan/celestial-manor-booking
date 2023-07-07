import React from "react";
import RoomCard from "../components/RoomCard";

function RoomPickerPage() {
  return (
    <div id="roomPickerPage">
      <h1 className="pageHeader">Click the Card to see more in details</h1>
      <RoomCard />
    </div>
  );
}

export default RoomPickerPage;
