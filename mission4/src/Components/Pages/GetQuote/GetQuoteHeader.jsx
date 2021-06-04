import React from "react";
import "./GetQuoteHeader.css";
import ChatBubble from "../../Images/ChatBubble.png";

function GetQuoteHeader() {
  return (
    <div id="Heading">
      {/*Top div left side*/}
      <div id="HeadingLeft">
        <div>
          <h1 className="GetQuoteHeading">GET AN INSTANT QUOTE</h1>
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
        <h1 className="HeadingRightTxt">Send by email</h1>
      </div>
    </div>
  );
}

export default GetQuoteHeader;
