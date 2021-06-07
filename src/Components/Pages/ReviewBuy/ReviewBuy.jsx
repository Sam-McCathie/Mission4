import React from "react";
import "./ReviewBuy.css";

//Componenets
import ReviewBuyHeader from "./ReviewBuyHeader";
import ReviewBuyBody from "./ReviewBuyBody";
import ReviewBuyFooter from "./ReviewBuyFooter";

function ReviewBuy() {
  return (
    <div>
      <ReviewBuyHeader />
      <ReviewBuyBody />
      <ReviewBuyFooter />
    </div>
  );
}

export default ReviewBuy;
