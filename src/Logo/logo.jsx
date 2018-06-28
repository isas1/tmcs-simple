import logo from "./cslogo.png";
import React from "react";

const styles = {
  maxHeight: "25px"
}

const Logo = () => {
  return (
    <img style={styles} src={logo} alt="My logo" />
  );
}

export default Logo;
