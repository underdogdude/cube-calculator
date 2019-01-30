import React, { Component } from 'react';
import Fat from './Fat';
import firebase from 'firebase';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
    firebase
      .database()
      .ref('user-' + props.history.location.state.name + '/')
      .set({
        data: props.history.location.state
      });
  }

  componentWillMount() {
    this.setState(this.props.location.state);
    console.log(this.props.location.state);
  }

  getYear(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  getMonth(birthdate) {
    var date1 = new Date(birthdate); //Remember, months are 0 based in JS
    var date2 = new Date();
    var year1 = date1.getFullYear();
    var year2 = date2.getFullYear();
    var month1 = date1.getMonth();
    var month2 = date2.getMonth();
    if (month1 === 0) {
      //Have to take into account
      month1++;
      month2++;
    }
    var month = (year2 - year1) * 12 + (month2 - month1);
    if (date2.getDate() <= date1.getDate()) {
      month--;
    }
    return month;
  }

  getDate(birthdate) {
    var date = new Date();
    var dateInMonth = new Date(birthdate).getDate();
    var day = date.getDate() - dateInMonth;

    return day;
  }

  getAge(birthdate) {
    const years = this.getYear(birthdate);
    const months = this.getMonth(birthdate) % years;
    const days = this.getDate(birthdate);

    return years + ' Years, ' + months + ' Months, ' + days + ' Days';
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
    var bmi = Number(this.state.bmi);
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
                        <td>{this.state.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender</th>
                        <td>{this.state.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Date of Birth</th>
                        <td>
                          {' '}
                          {this.state.birthdate.toLocaleDateString(
                            'en-US',
                            options
                          )}{' '}
                          <span className="sub-text">
                            {this.getAge(this.state.birthdate)}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Height</th>
                        <td> {this.state.height} </td>
                      </tr>
                      <tr>
                        <th scope="row">Weight</th>
                        <td> {this.state.weight} </td>
                      </tr>
                      <tr>
                        <th scope="row">Weight Goal</th>
                        <td> {this.state.weightGoal} </td>
                      </tr>
                      <tr>
                        <th scope="row">BMR</th>
                        <td> {this.state.bmr} </td>
                      </tr>
                      <tr>
                        <th scope="row">TDDE</th>
                        <td>{tdde[this.state.tdde]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Calories Goal</th>
                        <td>
                          {' '}
                          <b>{this.state.calGoal}</b>{' '}
                          <span className="sub-text">
                            less than ({this.state.calGoal} cal daily.)
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
                            age={this.getYear(this.state.birthdate)}
                            gender={this.state.gender}
                            fat={this.state.fat}
                          />
                        </td>
                        <th scope="row">Goal</th>
                        <td>{this.state.fatGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">VISCEREAL FAT%</th>
                        <td>{this.state.visfat}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.visfatGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">BONE%</th>
                        <td>{this.state.bone}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.boneGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">WATER%</th>
                        <td>{this.state.water}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.waterGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">Muscle%</th>
                        <td>{this.state.muscle}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.muscleGoal}</td>
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
                          {this.state.bmi}{' '}
                          <span dangerouslySetInnerHTML={{ __html: badge }} />
                        </td>
                        <th scope="row">Goal</th>
                        <td>{this.state.bmiGoal}</td>
                      </tr>
                      <tr>
                        <th scope="row">Body Age</th>
                        <td>{this.state.bodyage}</td>
                        <th scope="row">Goal</th>
                        <td>{this.state.bodyageGoal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
