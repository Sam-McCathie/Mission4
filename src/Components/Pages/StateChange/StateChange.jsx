import React, {Component} from "react";
import "./StateChange.css";

//Stages of quote
import GetQoute from "../GetQuote/GetQuote";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import ReviewBuy from "../ReviewBuy/ReviewBuy";

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

    // Get an instant quote
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
          <div id="PDFooter">
            <h1
              className="BackButton"
              onClick={() =>
                this.setState({whichComponentToShow: "QuoteDetails"})
              }
            >
              BACK
            </h1>
            <h1 className="DraftButton">SAVE AS DRAFT</h1>
            <h1
              className="NextButton"
              onClick={() => this.setState({whichComponentToShow: "ReviewBuy"})}
            >
              NEXT
            </h1>
          </div>
        </div>
      );
    }

    // Review & Buy
    else if (this.state.whichComponentToShow === "ReviewBuy") {
      return (
        <div>
          <ReviewBuy />
          <div id="RBFooter">
            {/*use props and re-use the code here -> replace paths*/}
            <h1
              className="BackButton"
              onClick={() =>
                this.setState({whichComponentToShow: "PersonalDetails"})
              }
            >
              BACK
            </h1>
            <h1 className="DraftButton">SAVE AS DRAFT</h1>
            <h1 className="MakePaymentButton">MAKE PAYMENT</h1>
          </div>
          <button>Redirect</button>
        </div>
      );
    }
  }
}

export default StateChange;
