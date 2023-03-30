import React, { useState } from "react";
import PointStatus from "./PointStatus/PointStatus";
import "./popup.css";

const Popup = (props) => {
  const [activeButton, setActiveButton] = useState(null);


  return props.showPopup ? (
    <PointStatus />
  ) : (
    ""
  );
};

export default Popup;
