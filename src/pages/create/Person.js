import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="p-5">
        <h4>Date : </h4>
        <form>
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}
