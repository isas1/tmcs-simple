import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  );
}

export default Header;
