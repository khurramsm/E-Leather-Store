import "../css/Navigation.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
const Navigation = () => {
  const [{ basket }] = useStateValue();
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand text-dark" to="/">
          {/* <img src={logo} alt="logo" /> */}
          C. Leather Jacket
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <i className="text-dark f2 fa fa-times"></i>
          ) : (
            <i className="text-dark f2 fa fa-bars"></i>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            <NavLink to="/contact" className="navigation-links mr-3">
              Contact
            </NavLink>
            <NavLink to="/" className="navigation-links mr-3">
              About
            </NavLink>
            <NavLink to="/cart" className="navigation-links mr-3">
              <i className="fas fa-shopping-cart"></i>
              <span>{basket.length}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
