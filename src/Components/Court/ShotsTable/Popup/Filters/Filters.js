import React from "react";
import "./filters.css";

const Filters = () => {
  const filer1 = ["Backhand", "Forehand"];
  const filer2 = ["Net", "Back Line", "Center Court", "Serve"];

  return (
    <div className="filters-container">
      <div className="filters">
        {filer1.map((option) => (
          <div className="filter" key={option} value={option}>
            {option}
          </div>
        ))}
      </div>
      <div className="filters">
        {filer2.map((option) => (
          <div className="filter" key={option} value={option}>
            {option}
          </div>
        ))}
      </div>
      <textarea placeholder="Description" />
    </div>
  );
};

export default Filters;
