import React, { Component } from "react";
import "./Cont2.css";
import {Doughnut} from 'react-chartjs-2';

class Cont2 extends Component {
  state = {  }
  data = {
    labels: [
      'North',
      'South',
      'East',
      'West'
    ],
    datasets: [{
      data: [45, 54, 67, 47],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#00CC00'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#00CC00'
      ]
    }]
    }
    style = {
      width: "100vw",
      height: "100vh"
    }
   
  render() { 
    return ( <div className="Cont2">
      <h3>% of Consumer complaints resolved</h3>
      <Doughnut data={this.data} />
    </div> );
  }
}
export default Cont2;







