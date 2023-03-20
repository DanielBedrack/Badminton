import React from "react";
import "./shotsTable.css";

const ShotsTable = () => {
  const myShots = [];
  const opponentShots = [];

  for (let i = 1; i <= 30; i++) {
    opponentShots.push(
      <React.Fragment key={i}>
        <button>{i}</button>
      </React.Fragment>
    );
  }
  for (let i = 1; i <= 30; i++) {
    myShots.push(
      <React.Fragment key={i}>
        <button>{i}</button>
      </React.Fragment>
    );
  }

  return (
    <div className="tables">
      <div className="my-table">{myShots}</div>
      <div className="opponent-table">{opponentShots}</div>
    </div>
  );
};

export default ShotsTable;
