import React from "react";
import "./PersonalDetailsFoot.css";

//Components

function PersonalDetailsFoot() {
  return (
    <div id="Footer">
      {/*use props and re-use the code here -> replace paths*/}
      <h1 className="BackButton">BACK</h1>
      <h1 className="DraftButton">SAVE AS DRAFT</h1>
      <h1 className="NextButton">NEXT</h1>
    </div>
  );
}

export default PersonalDetailsFoot;
