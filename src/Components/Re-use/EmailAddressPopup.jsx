import React from "react";
import "./EmailAddressPopup.css";

function EmailAddressPopup() {
  return (
    <div className="EmailAddressPopup">
      <h1 className="EAHeading">We'll email your quote.</h1>
      <p className="EAPolicy">View our Privacy Policy</p>
      <h3 className="EAInputEmail">Your email address</h3>
      <h3 className="EASend">Send</h3>
    </div>
  );
}

export default EmailAddressPopup;
