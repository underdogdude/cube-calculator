import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div className="p-5">
        <NavLink to="/create" className="navbar-item">
          <button className="btn btn-primary">
            ADD
            <i className="fa fa-plus-circle" />
          </button>
        </NavLink>
      </div>
    );
  }
}
