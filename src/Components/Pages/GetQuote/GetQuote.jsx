import React from "react";
import "./GetQuote.css";

//Components
import GetQuoteHeader from "./GetQuoteHeader";
import GetQuoteBody from "./GetQuoteBody";
import GetQuoteFooter from "./GetQuoteFooter";

function GetQuote() {
  return (
    <div>
      <GetQuoteHeader />
      <GetQuoteBody />
      <GetQuoteFooter />
    </div>
  );
}

export default GetQuote;
