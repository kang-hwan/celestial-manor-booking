import React from "react";
import navLogo from "../image/navLogo.svg";

function Header() {
  return (
    <div className="headerWrapper">
      <header>
        <div className="navBarLogo">
          <img src={navLogo} alt="headerLogo" />
        </div>
        <div className="navBar">
          <div className="navBar__item">
            <div>Adults & Children</div>
            <div>2/0</div>
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
