import React, { useState } from "react";
import "../styling/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">ERIK CORREA</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Projects</a>
        <a href="/about">Skills</a>
        <a href="/service">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
