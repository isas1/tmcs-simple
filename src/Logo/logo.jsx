import logo from "./cslogo.png";
import React from "react";

const styles = {
  height: "1%",
  maxHeight: "70px"
}

const Logo = () => {
  return (
    <img style={styles} src={logo} alt="My logo" />
  );
}

export default Logo;
