import React from "react";
import logo from "../../Assets/logo-blanc.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" className="logo" />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;