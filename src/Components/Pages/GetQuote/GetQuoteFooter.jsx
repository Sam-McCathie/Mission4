import React from "react";
import "./GetQuoteFooter.css";

function GetQuoteFooter() {
  return (
    <div id="GQFooter">
      <h1 className="GQResetButton">RESET</h1>
      <h1 className="GQDraftButton">SAVE AS DRAFT</h1>
      <h1 className="GQNextButton">NEXT</h1>
    </div>
  );
}

export default GetQuoteFooter;
