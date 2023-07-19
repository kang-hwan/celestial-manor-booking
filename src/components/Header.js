import React from "react";
import navLogo from "../image/navLogo.svg";
import { useSelector } from "react-redux";

function Header() {
  // ! Visitor Counter
  const adultCount = useSelector((state) => state.visitor.value.adults);
  const childCount = useSelector((state) => state.visitor.value.children);

  return (
    <div className="headerWrapper">
      <header>
        <div className="navBarLogo">
          <img src={navLogo} alt="headerLogo" />
        </div>
        <div className="navBar">
          <div className="navBar__item">
            <div>Adults & Children</div>
            <div>
              {adultCount} / {childCount}
            </div>
          </div>
          <div className="navBar__item">
            <div>Dates of Stay</div>
            <div>Select</div>
          </div>
          <div className="navBar__item">
            <div>Accommodations</div>
            <div>Select</div>
          </div>
          <div className="navBar__item">
            <div>Total Price</div>
            <div>0.00 AUD</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
