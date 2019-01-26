import React, { Component } from 'react';
import './App.css';
import Routing from './routes/index';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Routing />
        </div>
      </div>
    );
  }
}

export default App;
