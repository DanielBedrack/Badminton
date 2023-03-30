import React from 'react'
import Court from "../../Assets/dottedCourt.png";
import './gameShots.css'

const GameShots = () => {
  return (
    <div className="shots-container">
      {/* Forech */}
      <div className="points-stats">
        <p>All</p>
        1
        <p>Points</p>
        2
        <p>Mistakes</p>
        3
        <p>Winners</p>
        4
        <p>Oponent Points</p>
        5
        <p>Oponent Mistakes</p>
        6
        <p>Oponent Winners</p>
        7
      </div>
      <div className="dotted-court">
        <img src={Court} alt="marked-court" />
      </div>
    </div>
  );
}

export default GameShots
