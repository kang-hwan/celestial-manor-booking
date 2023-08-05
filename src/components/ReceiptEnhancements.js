import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeBreakfast,
  removeLateCheckOut,
  removeParking,
  removeSpecialSurprise,
} from "../features/receiptTotal";

export default function ReceiptEnhancements() {
  const dispatch = useDispatch();

  // useSelector Variables
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

  // render Components
  const renderBreakfastAddOn = () => {
    if (breakfastData.isAdded) {
      return (
        <div className="enhancementAddOnContainer">
          <div className="enhancementAddOnContainer__title">
            {breakfastData.enhancement} x {totalVisitors} guests
          </div>
          <div className="enhancementAddOnContainer__qtySubtotal">
            <div>{numberOfNights} Nights</div>
            <div>
              {breakfastData.unitPrice * numberOfNights * totalVisitors} AUD
            </div>
          </div>
          <div className="enhancementAddOnContainer__removeCta">
            <u onClick={() => dispatch(removeBreakfast())}>Remove</u>
          </div>
        </div>
      );
    }
  };

  const renderSpecialSurpriseAddOn = () => {
    if (surpriseData.isAdded) {
      return (
        <div className="enhancementAddOnContainer">
          <div className="enhancementAddOnContainer__title">
            {surpriseData.enhancement}
          </div>
          <div className="enhancementAddOnContainer__qtySubtotal">
            <div>{numberOfNights} Nights</div>
            <div>{surpriseData.unitPrice} AUD</div>
          </div>
          <div className="enhancementAddOnContainer__removeCta">
            <u onClick={() => dispatch(removeSpecialSurprise())}>Remove</u>
          </div>
        </div>
      );
    }
  };

  const renderLateCheckOutAddOn = () => {
    if (lateCheckOutData.isAdded) {
      return (
        <div className="enhancementAddOnContainer">
          <div className="enhancementAddOnContainer__title">
            {lateCheckOutData.enhancement}
          </div>
          <div className="enhancementAddOnContainer__qtySubtotal">
            <div>{numberOfNights} Nights</div>
            <div>{lateCheckOutData.unitPrice} AUD</div>
          </div>
          <div className="enhancementAddOnContainer__removeCta">
            <u onClick={() => dispatch(removeLateCheckOut())}>Remove</u>
          </div>
        </div>
      );
    }
  };

  const renderParkingAddOn = () => {
    if (parkingData.isAdded) {
      return (
        <div className="enhancementAddOnContainer">
          <div className="enhancementAddOnContainer__title">
            {parkingData.enhancement}
          </div>
          <div className="enhancementAddOnContainer__qtySubtotal">
            <div>{numberOfNights} Nights</div>
            <div>{parkingData.unitPrice * numberOfNights} AUD</div>
          </div>
          <div className="enhancementAddOnContainer__removeCta">
            <u onClick={() => dispatch(removeParking())}>Remove</u>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {renderBreakfastAddOn()}
      {renderSpecialSurpriseAddOn()}
      {renderLateCheckOutAddOn()}
      {renderParkingAddOn()}
    </div>
  );
}
