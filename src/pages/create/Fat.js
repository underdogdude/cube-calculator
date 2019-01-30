import React, { Component } from 'react';

const fat = props => {
  return (
    <div>
      {props.fat}
      <span dangerouslySetInnerHTML={{ __html: fatValidate(props) }} />
    </div>
  );
};

const fatValidate = props => {
  let age = Number(props.age);
  let fat = Number(props.fat);

  switch (props.gender) {
    case 'male':
      if (age >= 20 && age <= 39) {
        if (fat >= 0 && fat < 7) {
          return `<span class="badge badge-info">Underfat</span>`;
        } else if (fat >= 7 && fat < 20) {
          return `<span class="badge badge-success">Healthy</span>`;
        } else if (fat >= 20 && fat < 25) {
          return `<span class="badge badge-warning">Overfat</span>`;
        } else if (fat >= 25 && fat < 50) {
          return `<span class="badge badge-danger">Obese</span>`;
        } else {
          console.log('Undefined');
        }
      } else if (age >= 40 && age <= 59) {
        if (fat >= 0 && fat < 10) {
          return `<span class="badge badge-info">Underfat</span>`;
        } else if (fat >= 10 && fat < 22) {
          return `<span class="badge badge-success">Healthy</span>`;
        } else if (fat >= 22 && fat < 28.5) {
          return `<span class="badge badge-warning">Overfat</span>`;
        } else if (fat >= 28.5 && fat < 50) {
          return `<span class="badge badge-danger">Obese</span>`;
        } else {
          console.log('Undefined');
        }
      } else if (age >= 60 && age <= 79) {
        if (fat >= 0 && fat < 12.2) {
          return `<span class="badge badge-info">Underfat</span>`;
        } else if (fat >= 12.2 && fat < 25) {
          return `<span class="badge badge-success">Healthy</span>`;
        } else if (fat >= 25 && fat < 30) {
          return `<span class="badge badge-warning">Overfat</span>`;
        } else if (fat >= 30 && fat < 50) {
          return `<span class="badge badge-danger">Obese</span>`;
        } else {
          console.log('Undefined');
        }
      } else {
        console.log('Undefined NO Age');
      }

      break;
    case 'female':
      if (age >= 20 && age <= 39) {
        if (fat >= 0 && fat < 21) {
          return `<span class="badge badge-info">Underfat</span>`;
        } else if (fat >= 21 && fat < 33) {
          return `<span class="badge badge-success">Healthy</span>`;
        } else if (fat >= 33 && fat < 39.5) {
          return `<span class="badge badge-warning">Overfat</span>`;
        } else if (fat >= 39.5 && fat < 50) {
          return `<span class="badge badge-danger">Obese</span>`;
        } else {
          console.log('Undefined');
        }
      } else if (age >= 40 && age <= 59) {
        if (fat >= 0 && fat < 23) {
          return `<span class="badge badge-info">Underfat</span>`;
        } else if (fat >= 23 && fat < 34) {
          return `<span class="badge badge-success">Healthy</span>`;
        } else if (fat >= 34 && fat < 40) {
          return `<span class="badge badge-warning">Overfat</span>`;
        } else if (fat >= 40 && fat < 50) {
          return `<span class="badge badge-danger">Obese</span>`;
        } else {
          console.log('Undefined');
        }
      } else if (age >= 60 && age <= 79) {
        if (fat >= 0 && fat < 24) {
          return `<span class="badge badge-info">Underfat</span>`;
        } else if (fat >= 24 && fat < 36.2) {
          return `<span class="badge badge-success">Healthy</span>`;
        } else if (fat >= 36.2 && fat < 41.5) {
          return `<span class="badge badge-warning">Overfat</span>`;
        } else if (fat >= 41.5 && fat < 50) {
          return `<span class="badge badge-danger">Obese</span>`;
        } else {
          console.log('Undefined');
        }
      } else {
        console.log('Undefined NO Age');
      }
      break;
    default:
      break;
  }
};

export default fat;
