import "../css/Navigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [cart, setCart] = useState(2);
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <NavLink className="navbar-brand text-dark" to="/">
          logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto ">
            <NavLink to="/contact" className="navigation-links mr-3">
              Contact
            </NavLink>
            <NavLink to="/about" className="navigation-links mr-3">
              About
            </NavLink>
            <NavLink to="/cart" className="navigation-links mr-3">
              <i className="fas fa-shopping-cart"></i>
              <span>{cart}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
