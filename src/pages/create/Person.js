import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { NavLink } from 'react-router-dom';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }

  render() {
    return (
      <div className="p-5">
        <h4>Date : </h4>
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-body">
              <h2>Personal Infomation</h2>
              <div className="row pt-4">
                <div className="col-md-2">
                  <img
                    src="https://banner2.kisspng.com/20180320/ykw/kisspng-shoulder-human-behavior-neck-business-communicatio-user-male-5ab0eff5089198.6616975015215452050351.jpg"
                    alt="user-img"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-10">
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Full Name"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                      <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect pr-3">
                        <input
                          type="radio"
                          id="option-1"
                          className="mdl-radio__button"
                          name="options"
                          value="1"
                          defaultChecked
                        />
                        <span className="mdl-radio__label">Men</span>
                      </label>
                      <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                        <input
                          type="radio"
                          id="option-2"
                          className="mdl-radio__button"
                          name="options"
                          value="2"
                        />
                        <span className="mdl-radio__label">Women</span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-10">
                      <DatePicker
                        className="form-control"
                        style={{ width: '100%' }}
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  {/* Height */}
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Height</label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter your height"
                      />{' '}
                      (cm.)
                    </div>
                  </div>
                  {/* Weight */}
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Weight</label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter your Full Name"
                      />{' '}
                      (kg.)
                    </div>
                  </div>
                  {/* BMR */}
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">BMR</label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="BMR"
                      />
                    </div>
                  </div>

                  {/* TDDE */}
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">TDDE</label>
                    <div className="col-sm-10">
                      <select
                        type="number"
                        className="form-control"
                        placeholder="TDDE"
                      >
                        <option>Heavy Exercise</option>
                        <option>Heavy Exercise</option>
                        <option>Heavy Exercise</option>
                        <option>Heavy Exercise</option>
                      </select>
                    </div>
                  </div>

                  {/* Cal Goal */}
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Calories Goal
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Calories Goal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h2>Body Composition</h2>
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    FAT%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Fat%"
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Goal
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Goal"
                    />
                  </div>
                </div>
              </div>
              {/* VIS FAT */}
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    VISCEREAL FAT%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="VISCEREAL FAT%"
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Goal
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Goal"
                    />
                  </div>
                </div>
              </div>
              {/* BONE */}
              <div className="row form-group mt-3">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    BONE%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="BONE%"
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Goal
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Goal"
                    />
                  </div>
                </div>
              </div>
              {/* Water */}
              <div className="row form-group mt-3">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    WATER%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="WATER%"
                    />
                  </div>
                </div>
              </div>
              {/* Muscle */}
              <div className="row form-group mt-3">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    MUSCLE%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="MUSCLE%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Health Indicator  */}
          <div className="card mt-4">
            <div className="card-body">
              <h2>Body Indicator</h2>
              {/* BMI */}
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    BMI <br />
                    <i className="sub-text">(Body Mass Indicator)</i>
                  </label>

                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      required
                      placeholder="BMI"
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Goal
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Goal"
                    />
                  </div>
                </div>
              </div>
              {/* VIS FAT */}
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label text-right"
                  >
                    Body Age
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Body Age"
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label
                    for="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Goal
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Goal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            {/* <NavLink to="/summary" >   */}
            <button
              className="btn btn-primary btn-lg "
              style={{ minWidth: '300px' }}
              type="submit"
              value="Submit"
            >
              Submit
            </button>
            {/* </NavLink> */}
          </div>
        </form>
      </div>
    );
  }
}
