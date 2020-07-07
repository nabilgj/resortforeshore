import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo1.svg";

import { FaAlignRight } from "react-icons/fa";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          {/* header */}
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="resort logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          {/* menu items */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/rooms"> Rooms </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// will go into App
export default Navbar;
