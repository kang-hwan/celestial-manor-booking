import React, { useState } from "react";

// ! Components
import ReceiptEnhancements from "./ReceiptEnhancements";

// ! Assets
import { roomData } from "../data/roomData";
import imgBreakfast from "../image/enhancement-breakfast.png";
import imgSpecialSurprise from "../image/enhancement-specialSurprise.png";
import imgLateCheckOut from "../image/enhancement-lateCheckOut.png";
import imgParking from "../image/enhancement-parking.png";
import closeBtn from "../image/closeButton.svg";

// ! Library
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

// ! Reducers
import {
  addBreakfast,
  addLateCheckOut,
  addParking,
  addSpecialSurprise,
  removeBreakfast,
  removeLateCheckOut,
  removeParking,
  removeSpecialSurprise,
  selectRoom,
  selectRoomIndex,
  selectedRoomTotalPrice,
} from "../features/receiptTotal";
import EnhancementRemoveCta from "./EnhancementRemoveCta";
import { nextStep } from "../features/formStep";

// ------------------------------------------------------------------------
function RoomCard() {
  const [selected, setSelected] = useState(null);

  const totalVisitors = useSelector(
    (state) => state.visitor.value.adults + state.visitor.value.children
  );
  const numberOfNights = useSelector(
    (state) => state.lengthOfStay.value.totalNights
  );

  const breakfastData = useSelector((state) => state.receiptTotal.value[1]);
  const surpriseData = useSelector((state) => state.receiptTotal.value[2]);
  const lateCheckOutData = useSelector((state) => state.receiptTotal.value[3]);
  const parkingData = useSelector((state) => state.receiptTotal.value[4]);
  const totalPrice = useSelector(
    (state) => state.receiptTotal.value[5].totalPrice
  );

  const dispatch = useDispatch();

  const accordionToggle = (i) => {
    if (selected === i) {
      setSelected(null);
      dispatch(selectRoom("Select"));
      dispatch(selectedRoomTotalPrice(0));
    } else {
      setSelected(i);
      dispatch(selectRoom(roomData[i].title));
      dispatch(selectRoomIndex(i));
      dispatch(
        selectedRoomTotalPrice(roomData[i].pricePerNight * numberOfNights)
      );
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
                {/* <div className="roomCardSummary__details">
                  {item.details.map((details) => (
                    <div key={uuidv4()}>
                      <p>+ {details}</p>
                    </div>
                  ))}
                </div> */}
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
                <div
                  className={
                    selected === i
                      ? "roomCardCtaContainer__bookNow selected"
                      : "roomCardCtaContainer__bookNow"
                  }
                >
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
                        <p>+ {details}</p>
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
                      <img src={imgBreakfast} alt="enhancements-breakfast" />
                      <h3>Breakfast</h3>
                      <p>
                        Per Person <br />
                        Start the day with a delicious breakfast
                      </p>
                      <span>${breakfastData.unitPrice}</span>
                      <span>per person</span>
                      {breakfastData.isAdded ? (
                        <EnhancementRemoveCta
                          removeReducer={() => dispatch(removeBreakfast())}
                        />
                      ) : (
                        <button
                          className="btn-primary"
                          onClick={() =>
                            dispatch(
                              addBreakfast(
                                breakfastData.unitPrice *
                                  totalVisitors *
                                  numberOfNights
                              )
                            )
                          }
                        >
                          add enhancement
                        </button>
                      )}
                    </div>
                    <div>
                      <img
                        src={imgSpecialSurprise}
                        alt="enhancements-specialSurprise"
                      />
                      <h3>Special Surprise</h3>
                      <p>
                        Surprise your companion with a bottle of Spumante,
                        delicious...
                      </p>
                      <span>${surpriseData.unitPrice}</span>
                      <span>per bottle</span>
                      {surpriseData.isAdded ? (
                        <EnhancementRemoveCta
                          removeReducer={() =>
                            dispatch(removeSpecialSurprise())
                          }
                        />
                      ) : (
                        <button
                          className="btn-primary"
                          onClick={() =>
                            dispatch(addSpecialSurprise(surpriseData.unitPrice))
                          }
                        >
                          add enhancement
                        </button>
                      )}
                    </div>
                    <div>
                      <img
                        src={imgLateCheckOut}
                        alt="enhancements-lateCheckOut"
                      />
                      <h3>Late Check-Out</h3>
                      <p>Sleep long and postpone your check-out until 1pm.</p>
                      <span>${lateCheckOutData.unitPrice}</span>
                      {lateCheckOutData.isAdded ? (
                        <EnhancementRemoveCta
                          removeReducer={() => dispatch(removeLateCheckOut())}
                        />
                      ) : (
                        <button
                          className="btn-primary"
                          onClick={() =>
                            dispatch(
                              addLateCheckOut(lateCheckOutData.unitPrice)
                            )
                          }
                        >
                          add enhancement
                        </button>
                      )}
                    </div>
                    <div>
                      <img src={imgParking} alt="enhancements-Parking" />
                      <h3>Parking</h3>
                      <p>
                        Secure parking garage with surveillance 150m from the
                        hotel.
                      </p>
                      <span>${parkingData.unitPrice}</span>
                      <span>per night</span>
                      {parkingData.isAdded ? (
                        <EnhancementRemoveCta
                          removeReducer={() => dispatch(removeParking())}
                        />
                      ) : (
                        <button
                          className="btn-primary"
                          onClick={() =>
                            dispatch(
                              addParking(parkingData.unitPrice * numberOfNights)
                            )
                          }
                        >
                          add enhancement
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="receiptSection">
                <div className="receiptSection__roomRate">
                  <h3>Current Rate Selection</h3>
                  <div>{item.title}</div>
                  <div>{item.subtitle}</div>
                  <div>
                    <div>{numberOfNights} Nights</div>
                    <div>{item.pricePerNight * numberOfNights} AUD</div>
                  </div>
                </div>
                <div className="receiptSection__enhancementRate">
                  <h3>Enhancements</h3>
                  <ReceiptEnhancements />
                </div>
                <div className="receiptSection__totalRate">
                  <div>TOTAL:</div>
                  <div> {totalPrice} AUD</div>
                </div>
                <button
                  className="btn-accent--fill"
                  onClick={() => dispatch(nextStep())}
                >
                  confirm & checkout
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
