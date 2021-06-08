import React from "react";
import "./Testing.css";

import StateChange from "../StateChange/StateChange";
import ThankYou from "../ThankYou/Thankyou";

function Testing() {
  return (
    <div>
      <div className="AbsTest"></div>
      <StateChange />
      <ThankYou />
    </div>
  );
}

export default Testing;
