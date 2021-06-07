import React from "react";
import "./ReviewBuyFooter.css";

function ReviewBuyFooter() {
  return (
    <div id="Footer">
      {/*use props and re-use the code here -> replace paths*/}
      <h1 className="BackButton">BACK</h1>
      <h1 className="DraftButton">SAVE AS DRAFT</h1>
      <h1 className="MakePaymentButton">NEXT</h1>
    </div>
  );
}

export default ReviewBuyFooter;
