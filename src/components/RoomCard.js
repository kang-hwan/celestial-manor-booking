import React from "react";
import { roomData } from "../data/roomData";

function RoomCard() {
  return (
    <div>
      {roomData.map((room) => (
        <div className="roomCardContainer">
          <div className="roomCardContainer__img">
            <img src={room.picture} alt="room-img" />
          </div>
          <div className="roomCardContainer__body">
            <div className="cardBodyWrapper">
              <h2 className="cardBodyWrapper__title">{room.title}</h2>
              <h2 className="cardBodyWrapper__title">{room.subtitle}</h2>
              <p className="cardBodyWrapper__Description">
                {room.description1}
              </p>
              <p className="cardBodyWrapper__ViewDetail">
                <u>View Room Details & Enhancements</u>
              </p>
            </div>
            <div className="cardSummary">
              <div className="cardPrice">
                <p className="summaryFontLarge">$1,230 AUD</p>
              </div>
              <div className="cardBookingCta">
                <p className="summaryFontLarge">BOOK NOW</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomCard;
