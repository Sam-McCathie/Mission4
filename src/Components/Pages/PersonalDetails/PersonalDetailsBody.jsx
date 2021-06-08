import React, {Component} from "react";
import "./PersonalDetailsBody.css";

//Components
import CalendarPopup from "../../Re-use/CalendarPopup";

class PersonalDetailsBody extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div className="PersonalDetailsBody">
        <div>
          {this.state.visible ? (
            <div
              className="CalendarPopupGQ"
              onClick={() => {
                this.setState({visible: !this.state.visible});
              }}
            >
              <CalendarPopup />
            </div>
          ) : null}
          <div className="Textbox"></div>
          <div className="Textbox"></div>
          <div className="Textbox"></div>
          <div className="Textbox"></div>
          <div className="Textbox"></div>
          <div className="Textbox"></div>
          <div className="Textbox"></div>
          <button
            onClick={() => {
              this.setState({visible: !this.state.visible});
            }}
          >
            Temp Button
          </button>
        </div>
        <div>
          <h3 id="QuoteOutput">
            QUOTE
            <br />
            OUTPUT
          </h3>
        </div>
      </div>
    );
  }
}

export default PersonalDetailsBody;
