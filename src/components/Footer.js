import React from "react";
import { useDispatch } from "react-redux";
import { prevStep } from "../features/formStep";

function Footer() {
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="footerWrapper">
        <div className="text-sm">Celestial Manor*, Melbourne Australia</div>
        <div className="footerWrapper__ctaContainer">
          <div>
            <button className="text-sm ">Modify/Cancel Reservation</button>
          </div>
          <div className="footerPageControl">
            <button onClick={() => dispatch(prevStep())}>GO BACK</button>
            <button>START OVER</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
