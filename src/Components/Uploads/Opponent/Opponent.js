import React, { useState } from 'react';
import './opponent.css'
import Registration from "./Registration/Registration";

const Opponent = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleShowRegistration = () => {
    setShowRegistration(true);
  };

  const handleCloseRegistration = () => {
    setShowRegistration(false);
  };

  return (
    <div className="opponent">
      <p>Upload Opponent's Details</p>
      
      <button className="btn-design" onClick={handleShowRegistration}>
        <strong>+</strong>
      </button>
      {showRegistration && (
        <Registration onClose={handleCloseRegistration} />
      )}
    </div>
  );
};

export default Opponent;
