import React from "react";
import "./GetQuoteFooter.css";

function GetQuoteFooter() {
  return (
    <div id="Footer">
      {/*use props and re-use the code here -> replace paths*/}
      <h1 className="ResetButton">RESET</h1>
      <h1 className="DraftButton">SAVE AS DRAFT</h1>
      <h1 className="NextButton">NEXT</h1>
    </div>
  );
}

export default GetQuoteFooter;
