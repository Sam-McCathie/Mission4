import React from "react";
import "./PersonalDetails.css";

//Components
import PersonalDetailsHead from "./PersonalDetailsHead";
import PersonalDetailsBody from "./PersonalDetailsBody";
import PersonalDetailsFoot from "./PersonalDetailsFoot";

function PersonalDetails() {
  return (
    <div>
      <PersonalDetailsHead />
      <PersonalDetailsBody />
      <PersonalDetailsFoot />
    </div>
  );
}

export default PersonalDetails;
