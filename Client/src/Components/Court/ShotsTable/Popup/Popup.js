import React, { useState } from "react";
import ComboBox from "./ComboBox/ComboBox";
import Filters from "./Filters/Filters";
import PointStatus from "./PointStatus/PointStatus";
import "./popup.css";

const Popup = (props) => {

  return props.showPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <PointStatus
            setShowPopup={props.setShowPopup}
            showPopup={props.showPopup}
          />
          <ComboBox />
          <Filters />
          <div className="buttons">
            <button className="button">Clear</button>
            <button className="button">Save</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
