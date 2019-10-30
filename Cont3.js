import React , { Component } from "react";
import "./Cont3.css";
import {Bar} from 'react-chartjs-2';
class Cont3 extends Component {
state = {  }
 data = {
      datasets: [{
        data: 
           [708,355,69,550,245,286],
    backgroundColor: [
      '#0000CC',
      '#FF0000',
      '#FFCE56',
      '#66FF66',
      '#36A2EB',
      '#993300'
    ],
    label: 'Employees per dept',
    // backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
   
    }],
   labels: [
    'Engineering',
    'R&D',
    'Infrastructure',
    'Sales',
    'Management',
    'Finanace'
   ]
 };
 style = {
    width: "100vw",
    height: "100vh"
  }

 render() { 
    return ( <div className="Cont3">
      <h3>Employee per Department</h3>
      <Bar data={this.data} />
    </div> );
    
  }

}
export default Cont3;


// class Cont3 extends Component {
//  state = {
//     grossProfit: "85 Million $",
//     previous:"58 Million $",
//     change:"27 Million $",
//     trend: "+"
//     // username: "",
//     // compname: ""
//   };
//   componentWillMount() {
//     fetch("http://localhost:4000/")
//       .then(data => {
//         return data.json();
//       })
//       .then(dataObj => {
//         this.setState({
//           grossProfit: dataObj.grossProfit,
//           previous: dataObj.previous,
//           change: dataObj.change,
//           trend: dataObj.trend
//         //   compname: dataObj[0].company.name
//         });
//         // console.log(this.state.name, this.state.age);
//       });
//   }}
//   export default Cont3;
