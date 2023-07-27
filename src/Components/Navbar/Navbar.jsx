import React from "react";
import { Link } from "react-router-dom"
import logo from "../../Assets/logo.png"

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul>
          <li className="home"><Link to="/">Accueil</Link></li>
          <li className="about"><Link to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;