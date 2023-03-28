import React from "react";

const GameStats = (props) => {
  return (
    <div className="stats-container">
      {/* {props.stats.map((stat) => (
        <div key={stat.id} className="stats-line">
          Player 1: {stat.player1_shots} - Winner Shots - Player 2:{" "}
          {stat.player2_shots}
        </div>
      ))} */}
      Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
      Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
      Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
      Player 1: X - Winner Shots - Player 2: Y Player 1: X - Winner Shots -
      Player 2: Y Player 2: Y Player 2: Y Player 2: Y
    </div>
  );
};

export default GameStats;
