import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../firebase';

export default class Main extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
      }

      // const { history } = this.props;
      // history.push("/login")
    });
  }

  render() {
    return (
      <div className="p-5">
        {' '}
        <NavLink to="/create" className="navbar-item">
          <button className="btn btn-primary">Create +</button>
        </NavLink>
      </div>
    );
  }
}
