import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact to="/tmcs-hosted2/">Home</NavLink></li>
      <li><NavLink to="/tmcs-hosted2/about">About</NavLink></li>
      <li><NavLink to="/tmcs-hosted2/contact">Contact</NavLink></li>
    </ul>
  );
}

export default Header;
