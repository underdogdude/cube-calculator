import React, { Component } from 'react';
import './App.css';
import Routing from './routes/index';
import Home from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img
              src="https://images.vexels.com/media/users/3/137577/isolated/preview/75b3c8a4aba24222274e4ea2f2aa52ab-cube-geometric-abstract-logo-by-vexels.png"
              width="50"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Routing />
        </div>
      </div>
    );
  }
}

export default App;
