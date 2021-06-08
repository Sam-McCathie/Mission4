import React from "react";
import "./CalendarPopup.css";

//Components
import SearchIcon from "../Images/SearchIcon.png";
import CloseIcon from "../Images/Close.png";

function CalendarPopup() {
  return (
    <div className="CalendarPopup">
      <div className="CalendarHeader">
        <img src={SearchIcon} alt="Search" className="SearchIcon" />
        <div className="DateSearch"></div>
        <img src={CloseIcon} alt="Search" className="CloseIcon" />
      </div>
      <div className="CalendarGridContainer">
        {/*Week 1*/}
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        {/*Week 2*/}
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        {/*Week 3*/}
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        {/*Week 4*/}
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        {/*Week 5*/}
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
        <div className="DateNotSelected"></div>
      </div>
      <div className="DateSubmit"></div>
    </div>
  );
}

export default CalendarPopup;
