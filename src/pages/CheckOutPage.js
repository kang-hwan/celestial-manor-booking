import React from "react";
import { roomData } from "../data/roomData";
import { useSelector } from "react-redux";

export default function CheckOutPage() {
  const selectedRoomIndex = useSelector(
    (state) => state.receiptTotal.value[0].roomIndex
  );

  const selectedRoom = roomData[selectedRoomIndex];

  return (
    <div id="checkOutPage">
      <div className="checkOutPageContainer">
        <div className="checkOutPageContainer-roomDetailSection">
          <h3>Room Details</h3>
          <h3>{selectedRoom.title}</h3>
          <h3>{selectedRoom.subtitle}</h3>
          <p>{selectedRoom.description1}</p>
          <img src={selectedRoom.picture} alt="room" />
        </div>
        <div className="checkOutPageContainer-guestInfoSection">
          <h3>Guest Information</h3>
          <form>
            <input />
          </form>
        </div>
        <div className="checkOutPageContainer-receiptSection">
          Receipt Section
        </div>
      </div>
    </div>
  );
}
