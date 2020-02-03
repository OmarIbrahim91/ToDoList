import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="bg-dark container pt-5 pb-2 text-white">
        <h3 className="mb-5">Todo List Project</h3>
        <div className="nav d-flex justify-content-center">
          <Link to="/">
            <span className="text-white nav-link active">Home</span>
          </Link>
          <Link to="/about">
            <span className="text-white nav-link">About</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
