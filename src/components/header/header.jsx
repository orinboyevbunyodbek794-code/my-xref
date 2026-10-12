import React from "react";
import "./header.css";
import Navbar from "../navbar/navbar";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>Recruit, retain and remember your people</h1>
            <p>
              Simplify your talent journey and make confident, people-focused
              decisions with Xref.
            </p>
            <div className="hero-btn">
              <button className="one">Get started for free</button>
              <button className="two">Request a demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
