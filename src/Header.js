import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img
              src="https://images.vexels.com/media/users/3/137577/isolated/preview/75b3c8a4aba24222274e4ea2f2aa52ab-cube-geometric-abstract-logo-by-vexels.png"
              width="50"
              className="d-inline-block align-top"
              alt=""
            />
          </NavLink>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
