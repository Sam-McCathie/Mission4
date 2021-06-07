import React from "react";
import "./GetQuoteHeader.css";
import ChatBubble from "../../Images/ChatBubble.png";

function GetQuoteHeader() {
  return (
    <div>
      <div id="Heading">
        {/*Top div left side*/}
        <div id="HeadingLeft">
          <div>
            <h1 className="GetQuoteHeading">GET AN INSTANT QUOTE</h1>
          </div>
          <div id="StatusCircles">
            <div id="CircleOne">
              <h3 className="CircleNumber">1</h3>
            </div>
            <div className="ConnectorLine"></div>
            <div id="CircleTwo">
              <h3 className="CircleNumber">2</h3>
            </div>
            <div className="ConnectorLine"></div>
            <div id="CircleThree">
              <h3 className="CircleNumber">3</h3>
            </div>
          </div>
        </div>
        {/*Top div Right side*/}
        <div id="HeadingRight">
          <h1 className="HeadingRightTxt HelpTxt">Help</h1>
          <img src={ChatBubble} alt="EmailPopup" className="ChatBubble"></img>
          <h1 className="HeadingRightTxt">Send by email</h1>
        </div>
      </div>
      <div id="Progress">
        <h3 className="CurrentProgress QuoteDetails">Quote Details</h3>
        <h3 className="ProgressOption PersonalDetails">Personal Details</h3>
        <h3 className="ProgressOption ReviewBuy">Review then Buy</h3>
      </div>
    </div>
  );
}

export default GetQuoteHeader;
