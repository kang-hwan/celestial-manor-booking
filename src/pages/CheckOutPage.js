import React, { useState } from "react";
import { roomData } from "../data/roomData";
import { useDispatch, useSelector } from "react-redux";
import ReceiptEnhancements from "../components/ReceiptEnhancements";
import {
  updateAddress,
  updateEmail,
  updateFirstName,
  updateLastName,
  updateMessage,
  updateMobile,
} from "../features/guestInfo";
import { checkOutProcessed } from "../features/confirmCheckOut";
import CMlogo from "../image/celestialManorLogo.svg";

export default function CheckOutPage() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [message, setMessage] = useState(null);

  // Redux States
  const selectedRoomIndex = useSelector(
    (state) => state.receiptTotal.value[0].roomIndex
  );

  const numberOfNights = useSelector(
    (state) => state.lengthOfStay.value.totalNights
  );
  const totalPrice = useSelector(
    (state) => state.receiptTotal.value[5].totalPrice
  );

  const startDate = useSelector((state) => state.lengthOfStay.value.startDate);
  const endDate = useSelector((state) => state.lengthOfStay.value.endDate);

  const selectedRoom = roomData[selectedRoomIndex];

  const confirmCheckOut = useSelector((state) => state.confirmCheckOut.value);

  const dispatch = useDispatch();
  const processCheckout = () => {
    dispatch(updateFirstName(firstName));
    dispatch(updateLastName(lastName));
    dispatch(updateMobile(mobile));
    dispatch(updateEmail(email));
    dispatch(updateAddress(address));
    dispatch(updateMessage(message));
    dispatch(checkOutProcessed());
  };

  // Rendered Component
  return (
    <div id="checkOutPage">
      <div className="checkOutPageWrapper">
        <div className="checkOutPageWrapper__title">
          <h1 className="pageHeader final">Please confirm your details</h1>
        </div>
        <div className="checkOutPageContainer">
          <div className="checkOutPageContainer-roomDetailSection">
            <h3>
              {selectedRoom.title} <br />
              {selectedRoom.subtitle}
            </h3>
            <p>{selectedRoom.description1}</p>
            <img src={selectedRoom.picture} alt="room" />
          </div>
          <div className="checkOutPageContainer-guestInfoSection">
            <h3>Guest Information</h3>
            <p>Please leave your details</p>
            <form>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <label for="contactMobile">Contact Number</label>
              <input
                type="tel"
                id="contactMobile"
                name="contactMobile"
                placeholder="Contact Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label for="request">Special Request</label>
              <textarea rows="6" onChange={(e) => setMessage(e.target.value)} />
            </form>
          </div>
          <div className="receiptSection final">
            <div className="receiptSection__roomRate">
              <h3>Current Rate Selection</h3>
              <div>{selectedRoom.title}</div>
              <div>{selectedRoom.subtitle}</div>
              <div>
                <div>{numberOfNights} Nights</div>
                <div>{selectedRoom.pricePerNight * numberOfNights} AUD</div>
              </div>
            </div>
            <div className="receiptSection__enhancementRate">
              <h3>Enhancements</h3>
              <ReceiptEnhancements />
            </div>
            <div className="receiptSection__totalRate">
              <div>TOTAL:</div>
              <div> ${totalPrice} AUD</div>
            </div>
            <button
              className="btn-accent--fill"
              onClick={() => processCheckout()}
            >
              confirm & checkout
            </button>
          </div>
        </div>
        <div
          className={
            confirmCheckOut
              ? "confirmationPopUpSection confirmed"
              : "confirmationPopUpSection"
          }
        >
          <div className="confirmationPopUpSection-container">
            <div className="confirmationPopUpSection-container__header">
              <img src={CMlogo} alt="CMLogo" />
              <h3>Reservation Confirmation</h3>
            </div>
            <div className="confirmationPopUpSection-container__body">
              <h2>Dates Of Stay</h2>
              <h1>
                {startDate} - {endDate}
              </h1>
              <p>
                Thank you {firstName} {lastName} for updating the details of
                your stay at Celestial Manor Hotel. Please don't hesitate to
                contact us with any questions or further details.
              </p>
            </div>
            <div className="confirmationPopUpSection-container__footer">
              <p>
                Celestial Manor on Collins <br /> 25 Collins Street, Melbourne,
                Australia 3000 <br /> Tel: <u>+61 39653 0000</u> | Email:{" "}
                <u>H1902@sofitel.com</u>
              </p>
              <a
                className="btn-primary"
                href="https://celestial-manor.netlify.app/"
              >
                Return To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
