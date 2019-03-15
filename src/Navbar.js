import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <Link to="/" className="navbar-brand">
          Not IMDB
        </Link>
        <div className="navbar">
          <Link to="/mylist" className="nav-item nav-link text-light">
            My List
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
