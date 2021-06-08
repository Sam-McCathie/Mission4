import React from "react";
import "./Thankyou.css";
import Tick from "../../Images/tick.png";

function Thankyou() {
  return (
    <div className="Thankyou">
      <h1 id="HeadingTY">THANK YOU</h1>
      <div className="TickCircle">
        <img src={Tick} alt="CheckMark" id="Tick" />
      </div>
      <p className="ThankyouText">
        Thank you for choosing Turner's to insure your car. <br />
        You've made a great choice
      </p>
      <p className="ThankyouText">
        We've sent you all your insurance details <br />
        to your email address and saved it to your{" "}
        <span id="Highlight">
          profile <br />
          page
        </span>
        .
      </p>
      <h3 id="Home">BACK TO HOME</h3>
    </div>
  );
}

export default Thankyou;
