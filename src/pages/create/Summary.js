import React, { Component } from 'react';
import Fat from './Fat';
import firebase from 'firebase';
import moment from 'moment';

export default class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = props.history.location.state;
    console.log(this.state);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    firebase
      .database()
      .ref('user/')
      .push({
        birthdate: this.state.birthdate,
        date: this.state.date,
        data: this.state.data,
        name: this.props.history.location.state.data.name
      });

    this.props.history.push({
      pathname: '/'
    });
  }

  getAge(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(), now.getMonth(), now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var dob = new Date(
      dateString.substring(6, 10),
      dateString.substring(3, 5) - 1,
      dateString.substring(0, 2)
    );

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};

    let yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };

    return age;
  }

  textAge(date) {
    let age = this.getAge(date);
    var ageString = '';
    var yearString = '';
    var monthString = '';
    var dayString = '';

    if (age.years > 1) yearString = ' years';
    else yearString = ' year';
    if (age.months > 1) monthString = ' months';
    else monthString = ' month';
    if (age.days > 1) dayString = ' days';
    else dayString = ' day';

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        yearString +
        ', ' +
        age.months +
        monthString +
        ', and ' +
        age.days +
        dayString +
        ' old.';
    else if (age.years == 0 && age.months == 0 && age.days > 0)
      ageString = 'Only ' + age.days + dayString + ' old!';
    else if (age.years > 0 && age.months == 0 && age.days == 0)
      ageString = age.years + yearString + ' old. Happy Birthday!!';
    else if (age.years > 0 && age.months > 0 && age.days == 0)
      ageString =
        age.years + yearString + ' and ' + age.months + monthString + ' old.';
    else if (age.years == 0 && age.months > 0 && age.days > 0)
      ageString =
        age.months + monthString + ' and ' + age.days + dayString + ' old.';
    else if (age.years > 0 && age.months == 0 && age.days > 0)
      ageString =
        age.years + yearString + ' and ' + age.days + dayString + ' old.';
    else if (age.years == 0 && age.months > 0 && age.days == 0)
      ageString = age.months + monthString + ' old.';
    else ageString = 'Oops! Could not calculate age!';

    return ageString;
  }

  setDate(timestamp) {
    let date = moment(Number(timestamp)).format('DD/MM/YYYY');
    return date;
  }

  render() {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const tdde = {
      '1.2': 'Sedentary Office Job = BMR x 1.2',
      '1.375': 'Light Exercise (1-2 day/week) = BMR x 1.375',
      '1.55': 'Moderate Exercise (3-5 days/week) = BMR x 1.55',
      '1.725': 'Heavy Exercise (6-7 days/week) = BMR x 1.725',
      '1.9': 'Athlete (x2 per day) = BMR x 1.9'
    };
    // const  bmiChecker =  (bmi) => {
    var bmi = Number(this.state.data.bmi);
    var badge = '';
    if (bmi < 18.5) {
      badge = `<span class="badge badge-info">Underweight</span>`;
    } else if (bmi >= 18.5 && bmi < 25) {
      badge = `<span class="badge badge-success">Normal</span>`;
    } else if (bmi >= 25 && bmi < 30) {
      badge = `<span class="badge badge-warning">Overweight</span>`;
    } else if (bmi >= 30) {
      badge = `<span class="badge badge-danger">Obese</span>`;
    } else {
      badge = '-';
    }
    // }

    return (
      <div>
        <h1>Summary</h1>
        <div className="card">
          <div className="card-body">
            <h2>Personal Infomation</h2>
            <div className="row pt-4  pr-5 pl-5">
              <div className="col-md-12">
                <div className="form-group row">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Name</th>
                        <td>{this.state.data.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender</th>
                        <td>{this.state.data.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Date of Birth</th>
                        <td>
                          {this.setDate(this.state.birthdate)}
                          <span className="sub-text pl-2">
                            {this.textAge(this.setDate(this.state.birthdate))}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Height</th>
                        <td> {this.state.data.height} </td>
                      </tr>
                      <tr>
                        <th scope="row">Weight</th>
                        <td> {this.state.data.weight} </td>
                      </tr>
                      <tr>
                        <th scope="row">Weight Goal</th>
                        <td> {this.state.data.weightGoal} </td>
                      </tr>
                      <tr>
                        <th scope="row">BMR</th>
                        <td> {this.state.data.bmr} </td>
                      </tr>
                      <tr>
                        <th scope="row">TDDE</th>
                        <td>{tdde[this.state.data.tdde]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Calories Goal</th>
                        <td>
                          {' '}
                          <b>{this.state.data.calGoal}</b>{' '}
                          <span className="sub-text">
                            less than ({this.state.data.calGoal} cal daily.)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <h2>Body Composition</h2>
            <div className="row pt-4  pr-5 pl-5">
              <div className="col-md-12">
                <div className="form-group row">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">FAT%</th>
                        <td>
                          <Fat
                            age={this.getAge(
                              this.setDate(this.state.birthdate)
                            )}
                            gender={this.state.data.gender}
                            fat={this.state.data.fat}
                          />
                        </td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.fatGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">VISCEREAL FAT%</th>
                        <td>{this.state.data.visfat}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.visfatGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">BONE%</th>
                        <td>{this.state.data.bone}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.boneGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">WATER%</th>
                        <td>{this.state.data.water}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.waterGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">Muscle%</th>
                        <td>{this.state.data.muscle}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.muscleGoal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <h2>Body Indicator</h2>
            <div className="row pt-4  pr-5 pl-5">
              <div className="col-md-12">
                <div className="form-group row">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">
                          BMI
                          <p className="sub-text mb-0">(Body Mass Indicator)</p>
                        </th>
                        <td>
                          {this.state.data.bmi}
                          <span
                            className="pl-2"
                            dangerouslySetInnerHTML={{ __html: badge }}
                          />
                        </td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.bmiGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">Body Age</th>
                        <td>{this.state.data.bodyage}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.data.bodyageGoal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center mt-4 mb-4">
          <button
            className="btn btn-primary btn-lg mt-4 mb-4"
            onClick={this.handleClick}
            style={{ minWidth: '300px' }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
