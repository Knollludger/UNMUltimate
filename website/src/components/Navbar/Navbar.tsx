import React from "react";
import "./Navbar.css";
import {FaBomb, FaBiohazard, FaPaperPlane} from 'react-icons/fa'
class Header extends React.Component {
  icon_size = 22;

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li>
              <h2 className="nav-brand">University of New Mexico Ultimate</h2>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://www.unm.edu/~stimm48/Men.html"
              >
                <FaBiohazard size={this.icon_size}/> Hanta Virus
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaBomb size={this.icon_size}/> Bombshells
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
