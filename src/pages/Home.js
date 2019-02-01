import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

import auth from '../firebase';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };

    firebase
      .database()
      .ref('/user')
      .once('value', snapshot => {
        this.getData(snapshot.val());
      });

    this.handleClick = this.handleClick.bind(this);
  }

  getData(values) {
    let data = [];
    if (values && values !== 'null' && values !== 'undefined') {
      Object.keys(values).map(a => {
        data.push({
          name: values[a].name,
          data: values[a].data,
          date: values[a].date,
          birthdate: values[a].birthdate
        });
      });
      console.log('thisis sa a da');
      console.log(data);
      this.setState({
        user: data
      });
    }
  }

  handleClick = (e, value) => {
    console.log(value);
    e.preventDefault();
    this.props.history.push({
      pathname: '/summary',
      state: value
    });
  };

  componentDidMount() {
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({
    //       currentUser: user
    //     });
    //   }
    // });
  }

  render() {
    return (
      <div className="p-5">
        <NavLink to="/create" className="navbar-item float-right">
          <button className="btn btn-primary">Create +</button>
        </NavLink>

        <h1> รายการล่าสุด </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.user.length ? (
                this.state.user.reverse().map((user, idx) => {
                  return (
                    <div className="card mt-3" key={idx}>
                      <div className="card-body d-flex justify-content-between">
                        <strong>{user.name}</strong>

                        <button
                          className="btn btn-link"
                          onClick={e => this.handleClick(e, user)}
                        >
                          ดูข้อมูล
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center sub-text">
                  <p>ไม่มีข้อมูล กดปุ่ม Create เพื่อสร้างใหม่</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
