    
//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemCenter">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;