import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  }
  return (
    <div className="game-container">
      <NavLink className="link" to="/" onClick={handleHomeClick}>
        Game Analysis
      </NavLink>

      <div className="stats-container"></div>
    </div>
  );
}

export default Game
