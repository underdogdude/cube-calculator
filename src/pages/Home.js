import React, { Component } from 'react';
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
    return <div className="p-5" />;
  }
}
