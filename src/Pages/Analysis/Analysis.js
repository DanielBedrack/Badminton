import React from "react";
import { NavLink } from "react-router-dom";
import Court from "../../Components/Court/Court";
import Uploads from "../../Components/Uploads/Uploads";
import "./analysis.css";

const Analysis = () => {
  return (
    <div className="container">
      <div className="analysis-links">
        <NavLink className="analysis-link" to="/analysis/game">
          Game Analysis
        </NavLink>
        <NavLink className="analysis-link" to="/analysis/shots">
          Shots Analysis
        </NavLink>
        <div className="analysis-blocks">
          <Uploads />
          <Court />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
