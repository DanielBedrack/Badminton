import React from "react";
import Opponent from "../../../../Models/Opponent";

const Registration = ({ onClose, onSave }) => {
  const [player, setPlayer] = new Opponent();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(player);
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Player Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={player.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={player.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Club:
            <input
              type="text"
              name="club"
              value={player.club}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={player.age}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Strong Hand:
            <select
              name="strongHand"
              value={player.strongHand}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="right">Right</option>
              <option value="left">Left</option>
            </select>
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={player.country}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Game Video:
            <input
              type="text"
              name="gameVideo"
              value={player.gameVideo}
              onChange={handleInputChange}
              required
            />
          </label>
          <div className="popup-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
