import React, { useState } from "react";
import { roomData } from "../data/roomData";
import enhancementsImg01 from "../image/enhancementImg-01.png";
import elipse from "../image/roomDetails-elipse.svg";
import closeBtn from "../image/closeButton.svg";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { updateRoom } from "../features/roomSelection";

function RoomCard() {
  const [selected, setSelected] = useState(null);
  const numberOfNights = useSelector(
    (state) => state.lengthOfStay.value.totalNights
  );

  // Turn on and off accordion section to display extend information of each rooms.
  const dispatch = useDispatch();

  // const selectedItemTitle = selected !== null ? roomData[selected].title : "-";

  const accordionToggle = (i) => {
    if (selected === i) {
      setSelected(null);
      dispatch(updateRoom("Select")); // when no room is selected, dispatch "-"
    } else {
      setSelected(i);
      dispatch(updateRoom(roomData[i].title)); // dispatching the selected room's title
    }
  };

  return (
    <div>
      {roomData.map((item, i) => (
        <div className="roomCardContainer" key={i}>
          <div className="roomCard" onClick={() => accordionToggle(i)}>
            <div className="roomCard__img">
              <img src={item.picture} alt="room" />
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
                  <p className="roomCardCtaContainer__largeFont">
                    ${item.pricePerNight * numberOfNights} AUD
                  </p>
                </div>
                <div className="roomCardCtaContainer__bookNow">
                  <p className="roomCardCtaContainer__largeFont">BOOK NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              selected === i ? "roomDetailView show" : "roomDetailView"
            }
          >
            <div className="roomDetailView-closeWindow">
              <img src={closeBtn} alt="close-card" />
            </div>
            <div className="roomDetailView-body">
              <div className="roomDetailSection">
                <div className="roomDetailSection-body">
                  <h1 className="roomDetailSection-body__title">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </h1>
                  <p className="roomDetailSection-body__description">
                    {item.description1}
                    <br />
                    {item.description2}
                  </p>
                  <h1 className="roomDetailSection-body__roomSubheading">
                    ROOM DETAILS
                  </h1>
                  <div className="roomDetailSection-body__roomDimension">
                    {item.details.map((details) => (
                      <div key={uuidv4()}>
                        <img src={elipse} alt="elipse" />
                        <p>{details}</p>
                      </div>
                    ))}
                  </div>
                  <img
                    className="roomDetailSection-body__img"
                    src={item.picture}
                    alt="room"
                  />
                  <h1 className="roomDetailSection-body__roomSubheading">
                    ROOM AMENITIES
                  </h1>
                  <div className="roomDetailSection-body__featuresContainer">
                    {item.amenities.map((features) => (
                      <div key={uuidv4()}>{features}</div>
                    ))}
                  </div>
                </div>
                <div className="roomDetailSection-enhancements">
                  <h1 className="roomDetailSection-enhancements__title">
                    Enhance Your Stay
                  </h1>
                  <div className="roomDetailSection-enhancements__options">
                    <div>
                      <img
                        src={enhancementsImg01}
                        alt="enhancements-breakfast"
                      />
                      <h3>Breakfast</h3>
                      <p>
                        Per Person Per Night <br />
                        Start the day with a delicious breakfast
                      </p>
                      <span>$80</span>
                      <span>per person</span>
                      <button className="btn-primary">add enhancement</button>
                    </div>
                    <div>
                      <img
                        src={enhancementsImg01}
                        alt="enhancements-specialSurprise"
                      />
                      <h3>Special Surprise</h3>
                      <p>
                        Surprise your companion with a bottle of Spumante,
                        delicious...
                      </p>
                      <span>$100</span>
                      <span>per bottle</span>
                      <button className="btn-primary">add enhancement</button>
                    </div>
                    <div>
                      <img
                        src={enhancementsImg01}
                        alt="enhancements-lateCheckOut"
                      />
                      <h3>Late Check-Out</h3>
                      <p>Sleep long and postpone your check-out until 1pm.</p>
                      <span>$80</span>
                      <button className="btn-primary">add enhancement</button>
                    </div>
                    <div>
                      <img src={enhancementsImg01} alt="enhancements-Parking" />
                      <h3>Parking</h3>
                      <p>
                        Secure parking garage with surveillance 150m from the
                        hotel.
                      </p>
                      <span>$80</span>
                      <span>per night</span>
                      <button className="btn-primary">add enhancement</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="receiptSection">
                <h3>Current Rate Selection</h3>
                <p>{item.title}</p>
                <p>
                  ${item.pricePerNight} AUD x {numberOfNights} Nights
                </p>
                <button className="btn-accent--fill">
                  add room & checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomCard;
