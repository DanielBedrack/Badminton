import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import GameShots from '../../../Components/GameShots/GameShots';

const Shots = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="">
      <NavLink className="link" to="/analysis" onClick={handleHomeClick}>
        Back
      </NavLink>
      <div className="shots-sub-container">
        <GameShots />
      </div>
    </div>
  );
}

export default Shots
