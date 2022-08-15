import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="huddle logo" title="huddle logo" />
    </div>
  );
};

export default Header;
