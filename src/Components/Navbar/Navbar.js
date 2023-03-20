import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import Logo from "../../Assets/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <img className="navbar-logo" src={Logo} alt="Logo"/>
      <div className="navbar-links">
        <NavLink className='link' to="/" onClick={handleHomeClick}>Home</NavLink>
        <NavLink className='link' to="/analysis">Analysis</NavLink>
        <NavLink className='link' to="/matches">Matches</NavLink>
      </div>
      <div className="links-right">
        <NavLink className='link right' to="/login">Logout</NavLink>
        <NavLink className='link right' to="/help"><span></span></NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
