import React, { useState } from "react";
import { roomData } from "../data/roomData";

function RoomCard() {
  const [selected, setSelected] = useState(null);

  const accordionToggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      {roomData.map((item, i) => (
        <div
          className="roomCardContainer"
          key={i}
          onClick={() => accordionToggle(i)}
        >
          <div className="roomCard">
            <div className="roomCard__img">
              <img src={item.picture} />
            </div>
            <div className="roomCardSummaryContainer">
              <div
                className={
                  selected === i
                    ? "roomCardSummary selected"
                    : "roomCardSummary"
                }
              >
                <h1 className="roomCardSummary__title">{item.title}</h1>
                <h1 className="roomCardSummary__title">{item.subtitle}</h1>
                <p className="roomCardSummary__description">
                  {item.description1}
                </p>
                <p>
                  <u>View Room Details & Enhancements</u>
                </p>
              </div>
              <div className="roomCardCtaContainer">
                <div className="roomCardCtaContainer__price">
                  <p className="roomCardCtaContainer__largeFont">$1,230 AUD</p>
                </div>
                <div className="roomCardCtaContainer__bookNow">
                  <p className="roomCardCtaContainer__largeFont">BOOK NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="roomDetailView">
            <div className="roomDetailSection"></div>
            <div className="receiptSection"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomCard;
