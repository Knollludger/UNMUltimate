import React from "react";
import "./Navbar.css";
const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li>
            <h2 className="nav-brand">University of New Mexico Ultimate</h2>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
