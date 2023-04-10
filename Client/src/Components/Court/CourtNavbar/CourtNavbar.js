import React, { useState } from "react";
import "./courtNavbar.css";

const CourtNavbar = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [dragPosition, setDragPosition] = useState(false);

  const draggable = () => {
    setDragPosition(!dragPosition);
  };

  const handleMouseDown = (event, color) => {
    setSelectedColor(color);
    setDragPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (selectedColor !== null) {
      setDragPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setSelectedColor(null);
  };
  return (
    <div className="btns-container">
      <button className="btn-design2 top">Edit</button>
      <div
        className="points-drag"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <button
          className="btn-design2"
          draggable={true}
          onDragStart={draggable}
          onDragEnd={draggable}
        >
          Winner
        </button>
        <button
          className="loser"
          draggable={true}
          onDragStart={draggable}
          onDragEnd={draggable}
        >
          Loser
        </button>
      </div>
      <button className="btn-design2 bottom">SAVE</button>
    </div>
  );
};

export default CourtNavbar;
