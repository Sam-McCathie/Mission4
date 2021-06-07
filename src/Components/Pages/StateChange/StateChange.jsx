import React, {Component} from "react";
import "./StateChange.css";

//Stages of quote
import GetQoute from "../GetQuote/GetQuote";
import PersonalDetails from "../PersonalDetails/PersonalDetails";

class StateChange extends Component {
  state = {
    visible: true,
    whichComponentToShow: "StartQuote",
  };

  render() {
    // starting state - default insurance webpage
    if (this.state.whichComponentToShow === "StartQuote") {
      return (
        <div>
          <h1>Get Quote</h1>
          <button
            onClick={() =>
              this.setState({whichComponentToShow: "QuoteDetails"})
            }
          >
            Forward
          </button>
        </div>
      );
    }

    // get and instant quote
    else if (this.state.whichComponentToShow === "QuoteDetails") {
      return (
        <div>
          <GetQoute />
          <div id="GQFooter">
            <h1 className="GQResetButton">RESET</h1>
            <h1 className="GQDraftButton">SAVE AS DRAFT</h1>
            <h1
              className="GQNextButton"
              onClick={() =>
                this.setState({whichComponentToShow: "PersonalDetails"})
              }
            >
              NEXT
            </h1>
          </div>
        </div>
      );
    }

    //Personal details
    else if (this.state.whichComponentToShow === "PersonalDetails") {
      return (
        <div>
          <PersonalDetails />

          <button
            onClick={() =>
              this.setState({whichComponentToShow: "QuoteDetails"})
            }
          >
            Back
          </button>
        </div>
      );
    }

    // Review & Buy
    else if (this.state.whichComponentToShow === "PersonalDetails") {
      return (
        <div>
          <h1>Personal Details</h1>
          <button
            onClick={() =>
              this.setState({whichComponentToShow: "QuoteDetails"})
            }
          >
            Back
          </button>
        </div>
      );
    }
  }
}

export default StateChange;
