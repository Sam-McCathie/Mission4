import React from "react";
import "./ReviewBuyBody.css";

import Visa from "../../Images/visa.png";

function ReviewBuyBody() {
  return (
    <div className="ReviewBuyBody">
      <h1 id="FinalReviewTxt">FINAL REVIEW</h1>
      <img src={Visa} alt="Visa Card" className="VisaImg" />
    </div>
  );
}

export default ReviewBuyBody;
