import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <ul className="links">
            <li>
              <a href="#">Why Xref</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <div className="btns">
            <button className="one">Sign in</button>
            <button className="two">Request a demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
