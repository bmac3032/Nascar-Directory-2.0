import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/drivers" className="nav-link" activeClassName="active">
            Drivers
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
