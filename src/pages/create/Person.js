import React, { Component } from 'react';

export default class Person extends Component {
  render() {
    return (
      <div className="p-5">
        <h4>Date : </h4>
        <div className="card">
          <div className="card-body">
            <h2>Personal Infomation</h2>
            <div className="row pt-4">
              <div className="col-md-2">
                <img
                  src="https://banner2.kisspng.com/20180320/ykw/kisspng-shoulder-human-behavior-neck-business-communicatio-user-male-5ab0eff5089198.6616975015215452050351.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10">
                <form>
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
                      <label
                        className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
                        for="option-1"
                      >
                        <input
                          type="radio"
                          id="option-1"
                          className="mdl-radio__button"
                          name="options"
                          value="1"
                          checked
                        />
                        <span className="mdl-radio__label">First</span>
                      </label>
                      <label
                        className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
                        for="option-2"
                      >
                        <input
                          type="radio"
                          id="option-2"
                          className="mdl-radio__button"
                          name="options"
                          value="2"
                        />
                        <span className="mdl-radio__label">Second</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
