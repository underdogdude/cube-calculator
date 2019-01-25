import React, { Component } from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.state);
  }
  render() {
    return <h1> Summary </h1>;
  }
}
