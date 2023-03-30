import React, { useState } from "react";
import Popup from "./Popup/Popup";
import "./shotsTable.css";

const ShotsTable = () => {
  const myShots = [];
  const opponentShots = [];
  const [showPopup, setShowPopup] = useState(false);



  for (let i = 1; i <= 30; i++) {
    opponentShots.push(
      <React.Fragment key={i}>
        <button onClick={() => setShowPopup(true)}>
          {i}        
        </button>
      </React.Fragment>
    );
  }
  for (let i = 1; i <= 30; i++) {
    myShots.push(
      <React.Fragment key={i}>
        <button onClick={() => setShowPopup(true)}>{i}</button>
      </React.Fragment>
    );
  }

  return (
    <div className="tables">
      <div className="my-table">{myShots}</div>
      <div className="opponent-table">{opponentShots}</div>
      
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default ShotsTable;
