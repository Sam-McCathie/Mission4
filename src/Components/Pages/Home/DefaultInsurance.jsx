import React from "react";
import "./DefaultInsurance.css";

function DefaultInsurance() {
  return (
    <div>
      <div id="HeadingDI">
        {/*Top div left side*/}

        <div>
          <h1 className="GetQuoteHeadingDI">
            IT ONLY TAKES 3 STEPS TO GET INSURED
          </h1>
        </div>
        <div id="StatusCirclesDI">
          <div id="CircleOneDI" className="CurrentStatusDI">
            <h3 className="CircleNumberDI">1</h3>
          </div>
          <div className="ConnectorLineDI"></div>
          <div id="CircleTwoDI">
            <h3 className="CircleNumberDI">2</h3>
          </div>
          <div className="ConnectorLineDI"></div>
          <div id="CircleThreeDI">
            <h3 className="CircleNumberDI">3</h3>
          </div>
        </div>
        <div id="ProgressDI">
          <h3 className="ProgressOptionDI QuoteDetailsDI">Quote Details</h3>
          <h3 className="ProgressOptionDI PersonalDetailsDI">
            Personal Details
          </h3>
          <h3 className="ProgressOptionDI ReviewBuyDI">Review then Buy</h3>
        </div>
      </div>
    </div>
  );
}

export default DefaultInsurance;
