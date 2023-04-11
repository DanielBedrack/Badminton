import React, { useState } from "react";
import Combobox from "react-widgets/Combobox";
import "./filters.css";

const MatchFilters = (props) => {
  const [opponent, SetOpponent] = useState({});

  let opponents = [
    { id: 0, name: "Daniel" },
    { id: 1, name: "Ben" },
    { id: 2, name: "Omer" },
    { id: 3, name: "Saar" },
  ];

  // const fetchOpponents = async () => {
  //   SetOpponent(opponents);
  // };

  // useEffect(() => {
  //   fetchOpponents();
  // }, []); //הולך להיות עם כפתור חיפוש בינתיים במהשך יהיה אוטומטי

  return (
    <div className="filters-container">
      <div className="name-filter">
        <Combobox
          hideCaret
          hideEmptyPopup
          dataKey="id"
          textField={opponent.name}
          data={opponents}
          filter="contains"
          value={opponent}
          onChange={(newOpponent) => SetOpponent(newOpponent)}
          placeholder="Search for an Opponent"
        />
      </div>
      <div className="age-filter">
        <Combobox
          hideCaret
          hideEmptyPopup
          data={["U11", "U13", "U15", "U17", "U19", "Pro"]}
          placeholder="Search for a color"
        />
      </div>
      <div className="lastSave-filter">
        <label>By Date</label>
        <input id="last-saves" type="radio" />
        <input id="first-saves" type="radio" />
      </div>
      <div className="lastSave-filter">
        <label>By Date</label>
        <input id="last-saves" type="radio" />
        <input id="first-saves" type="radio" />
      </div>
    </div>
  );
};

export default MatchFilters;
