import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { withRouter } from 'react-router-dom';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      dateShow: '',
      name: '',
      gender: 'male',
      birthdate: new Date(),
      birthdateShow: '',
      height: '',
      weight: '',
      weightGoal: '',
      bmr: '',
      tdde: '1.2',
      calGoal: '',
      fat: '',
      fatGoal: '',
      visfat: '',
      visfatGoal: '',
      bone: '',
      boneGoal: '',
      water: '',
      waterGoal: '',
      muscle: '',
      muscleGoal: '',
      bmi: '',
      bmiGoal: '',
      bodyage: '',
      bodyageGoal: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleChange(date) {
    this.setState({
      birthdate: date
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    // this.setState(
    //   {
    //     birthdateShow: moment(this.state.birthdate).format('YYYY-MM-DD'),
    //     dateShow: moment(this.state.date).format('YYYY-MM-DD')
    //   },
    //   () => {
    this.props.history.push({
      pathname: '/summary',
      state: this.state
    });
    //   }
    // );
  };

  render() {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return (
      <div className="p-5">
        <h4>Date : {this.state.date.toLocaleDateString('en-US', options)} </h4>
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-body">
              <h2>Personal Infomation</h2>
              <div className="row pt-4">
                <div className="col-md-2">
                  {/* <img
                    src="https://banner2.kisspng.com/20180320/ykw/kisspng-shoulder-human-behavior-neck-business-communicatio-user-male-5ab0eff5089198.6616975015215452050351.jpg"
                    alt="user-img"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-md-9">
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Full Name"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                      <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect pr-3">
                        <input
                          type="radio"
                          className="mdl-radio__button"
                          name="gender"
                          value="male"
                          checked={this.state.gender === 'male'}
                          onChange={this.handleInputChange}
                        />
                        <span className="mdl-radio__label">Male</span>
                      </label>
                      <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                        <input
                          type="radio"
                          className="mdl-radio__button"
                          name="gender"
                          value="female"
                          onChange={this.handleInputChange}
                          checked={this.state.gender === 'female'}
                        />
                        <span className="mdl-radio__label">Female</span>
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
                        selected={this.state.birthdate}
                        onChange={this.handleChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        dateFormat="dd/MM/yyyy"
                        maxDate={new Date()}
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
                        required
                        value={this.state.height}
                        name="height"
                        onChange={this.handleInputChange}
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
                        placeholder="Enter your weight"
                        required
                        value={this.state.weight}
                        name="weight"
                        onChange={this.handleInputChange}
                      />{' '}
                      (kg.)
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Weight Goal
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        required
                        value={this.state.weightGoal}
                        placeholder="Enter your weight goal"
                        name="weightGoal"
                        onChange={this.handleInputChange}
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
                        value={this.state.bmr}
                        name="bmr"
                        onChange={this.handleInputChange}
                        required
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
                        value={this.state.tdde}
                        name="tdde"
                        onChange={this.handleInputChange}
                      >
                        <option value="1.2">
                          Sedentary Office Job = BMR x 1.2
                        </option>
                        <option value="1.375">
                          Light Exercise (1-2 day/week) = BMR x 1.375
                        </option>
                        <option value="1.55">
                          Moderate Exercise (3-5 days/week) = BMR x 1.55{' '}
                        </option>
                        <option value="1.725">
                          Heavy Exercise (6-7 days/week) = BMR x 1.725
                        </option>
                        <option value="1.9">
                          Athlete (x2 per day) = BMR x 1.9
                        </option>
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
                        type="number"
                        className="form-control"
                        placeholder="Calories Goal"
                        value={this.state.calGoal}
                        name="calGoal"
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-1" />
              </div>
              <div className="p-3 text-right">
                <span className="text-danger float-right">
                  Note : All Field are required.{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h2>Body Composition</h2>
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label className="col-sm-3 col-form-label text-right">
                    FAT%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="fat"
                      placeholder="Fat%"
                      value={this.state.fat}
                      name="fat"
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="fatGoal"
                      placeholder="Goal"
                      value={this.state.fatGoal}
                      name="fatGoal"
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* VIS FAT */}
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label className="col-sm-3 col-form-label text-right">
                    VISCEREAL FAT%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="visfat"
                      placeholder="VISCEREAL FAT%"
                      value={this.state.visfat}
                      name="visfat"
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="visfatGoal"
                      placeholder="Goal"
                      name="visfatGoal"
                      onChange={this.handleInputChange}
                      value={this.state.visfatGoal}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* BONE */}
              <div className="row form-group mt-3">
                <div className="col-md-8 row">
                  <label className="col-sm-3 col-form-label text-right">
                    BONE%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="bone"
                      placeholder="BONE%"
                      name="bone"
                      onChange={this.handleInputChange}
                      value={this.state.bone}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="boneGoal"
                      placeholder="Goal"
                      name="boneGoal"
                      onChange={this.handleInputChange}
                      value={this.state.boneGoal}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Water */}
              <div className="row form-group mt-3">
                <div className="col-md-8 row">
                  <label className="col-sm-3 col-form-label text-right">
                    WATER%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="water"
                      placeholder="WATER%"
                      name="water"
                      onChange={this.handleInputChange}
                      value={this.state.water}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="waterGoal"
                      placeholder="Goal"
                      name="waterGoal"
                      onChange={this.handleInputChange}
                      value={this.state.waterGoal}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Muscle */}
              <div className="row form-group mt-3">
                <div className="col-md-8 row">
                  <label className="col-sm-3 col-form-label text-right">
                    MUSCLE%
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="muscle"
                      value={this.state.muscle}
                      name="muscle"
                      onChange={this.handleInputChange}
                      placeholder="MUSCLE%"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="muscleGoal"
                      placeholder="Goal"
                      name="muscleGoal"
                      onChange={this.handleInputChange}
                      value={this.state.muscleGoal}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="p-3 text-right">
                <span className="text-danger float-right">
                  Note : All Field are required.{' '}
                </span>
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
                  <label className="col-sm-3 col-form-label text-right">
                    BMI <br />
                    <i className="sub-text">(Body Mass Indicator)</i>
                  </label>

                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="bmi"
                      required
                      placeholder="BMI"
                      name="bmi"
                      onChange={this.handleInputChange}
                      value={this.state.bmi}
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="bmiGoal"
                      placeholder="Goal"
                      name="bmiGoal"
                      onChange={this.handleInputChange}
                      value={this.state.bmiGoal}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* VIS FAT */}
              <div className="row form-group">
                <div className="col-md-8 row">
                  <label className="col-sm-3 col-form-label text-right">
                    Body Age
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="bodyage"
                      placeholder="Body Age"
                      name="bodyage"
                      onChange={this.handleInputChange}
                      value={this.state.bodyage}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 row">
                  <label className="col-sm-3 col-form-label">Goal</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="bodyageGoal"
                      placeholder="Goal"
                      value={this.state.bodyageGoal}
                      name="bodyageGoal"
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="p-3 text-right">
                <span className="text-danger float-right">
                  Note : All Field are required.{' '}
                </span>
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
