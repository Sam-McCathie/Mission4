import React from "react";
import "./GetQuoteBody.css";

function GetQuoteBody() {
  return (
    <div id="Body">
      <div id="BodyLeft">
        <div id="QuoteHeader">
          <h2 id="HeaderMain">Select Insurance Cover Type</h2>
          <h3 className="HeaderOption">Comprehensive</h3>
          <h3 className="HeaderOption">Third Party</h3>
          <h3 className="HeaderOption">Third Party, Fire & Theft</h3>
        </div>
        <div className="OptionFlex PolicyStartDiv">
          <h3 className="QuoteOption PolicyStart">
            When would you like your policy to start?
          </h3>
          <h3 className="DateOption">Day v</h3>
          <h3 className="DateOption">Month v</h3>
          <h3 className="DateOption">Year v</h3>
        </div>
        <div className="OptionFlex RegoSearchDiv">
          <h3 className="QuoteOption RegoSearchTxt">Car Rego</h3>
          <div id="Textbox"></div>
          <h3 className="QuoteOption RegoSearchTxt">Search</h3>
        </div>
        <div className="OptionFlex">
          <h3 className="QuoteOption Modifications">
            After market modifications?
          </h3>
        </div>
        <div className="OptionFlex">
          <h3 className="QuoteOption">Do you use your car for business?</h3>
        </div>
      </div>
      <div id="BodyRight">
        <h3 id="QuoteOutput">QUOTE OUTPUT</h3>
      </div>
    </div>
  );
}

export default GetQuoteBody;
