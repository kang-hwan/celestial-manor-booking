import React from "react";
import { roomData } from "../data/roomData";
import { useSelector } from "react-redux";
import ReceiptEnhancements from "../components/ReceiptEnhancements";

export default function CheckOutPage() {
  const selectedRoomIndex = useSelector(
    (state) => state.receiptTotal.value[0].roomIndex
  );

  const numberOfNights = useSelector(
    (state) => state.lengthOfStay.value.totalNights
  );
  const totalPrice = useSelector(
    (state) => state.receiptTotal.value[5].totalPrice
  );

  const selectedRoom = roomData[selectedRoomIndex];

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
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
              />
              <label for="contactMobile">Contact Number</label>
              <input
                type="tel"
                id="contactMobile"
                name="contactMobile"
                placeholder="Contact Number"
              />
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
              <label for="request">Special Request</label>
              <textarea rows="6" />
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
            <button className="btn-accent--fill">confirm & checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
