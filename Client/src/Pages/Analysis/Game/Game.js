import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GameStats from "../../../Components/GameStats/GameStats";
import './game.css'

const Game = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="game-container">
      <NavLink className="link" to="/analysis" onClick={handleHomeClick}>
        Back 
      </NavLink>
      <div className="stats-container">
        <GameStats />
      </div>
    </div>
  );
};

export default Game;
