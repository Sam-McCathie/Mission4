import React from "react";
import "./ReviewBuyHeader.css";

import ChatBubble from "../../Images/ChatBubble.png";

function ReviewBuyHeader() {
  return (
    <div>
      <div id="Heading">
        {/*Top div left side*/}
        <div id="HeadingLeft">
          <div>
            <h1 className="GetQuoteHeading">REVIEW AND BUY</h1>
          </div>
          <div id="StatusCircles">
            <div id="CircleOne">
              <h2 className="CircleNumber">1</h2>
            </div>
            <div className="ConnectorLine"></div>
            <div id="CircleTwo">
              <h2 className="CircleNumber">2</h2>
            </div>
            <div className="ConnectorLine"></div>
            <div id="CircleThree">
              <h2 className="CircleNumber">3</h2>
            </div>
          </div>
        </div>
        {/*Top div Right side*/}
        <div id="HeadingRight">
          <h1 className="HeadingRightTxt HelpTxt">Help</h1>
          <img src={ChatBubble} alt="EmailPopup" className="ChatBubble"></img>
        </div>
      </div>
      <div id="Progress">
        <h3 className="ProgressOption QuoteDetails">Quote Details</h3>
        <h3 className="ProgressOption PersonalDetails">Personal Details</h3>
        <h3 className="CurrentProgress ReviewBuy">Review then Buy</h3>
      </div>
    </div>
  );
}

export default ReviewBuyHeader;
