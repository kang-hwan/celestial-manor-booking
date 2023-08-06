import React from "react";
import navLogo from "../image/navLogo.svg";
import { useSelector } from "react-redux";

function Header() {
  const currentStep = useSelector((state) => state.stepForm.value);

  // ! Visitor Counter
  const adultCount = useSelector((state) => state.visitor.value.adults);
  const childCount = useSelector((state) => state.visitor.value.children);

  // ! Length of Stay
  const startDate = useSelector((state) => state.lengthOfStay.value.startDate);
  const endDate = useSelector((state) => state.lengthOfStay.value.endDate);
  const totalNights = useSelector(
    (state) => state.lengthOfStay.value.totalNights
  );

  // ! Selected Room
  const selectedRoom = useSelector(
    (state) => state.receiptTotal.value[0].selectedRoom
  );

  const totalPrice = useSelector(
    (state) => state.receiptTotal.value[5].totalPrice
  );

  return (
    <div className="headerWrapper">
      <header>
        <div className="navBarLogo">
          <img src={navLogo} alt="headerLogo" />
        </div>
        <div className="navBar">
          <div
            className={
              currentStep === 1 ? "navBar__item current" : "navBar__item"
            }
          >
            <div>Adults & Children</div>
            <div>
              {adultCount} / {childCount}
            </div>
          </div>
          <div
            className={
              currentStep === 2 ? "navBar__item current" : "navBar__item"
            }
          >
            <div>Dates of Stay</div>
            <div>
              {startDate} - {endDate}
            </div>
            <div>
              {totalNights} Nights {totalNights + 1} Days
            </div>
          </div>
          <div
            className={
              currentStep === 3 ? "navBar__item current" : "navBar__item"
            }
          >
            <div>Accommodations</div>
            <div>{selectedRoom}</div>
          </div>
          <div
            className={
              currentStep === 4 ? "navBar__item current" : "navBar__item"
            }
          >
            <div>Total Price</div>
            <div>{totalPrice} AUD</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
