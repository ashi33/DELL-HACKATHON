import React, { Component } from "react";
import "./Container.css";
//  import { VictoryBar, VictoryChart,VictoryAxis } from 'victory';

//  const data = [
//   {qtr: 1, earnings: 40000},
//   {qtr: 2, earnings: 86500},
//   {qtr: 3, earnings: 55630},
//   // {year: 4, earnings: 34670},
//   // {year: 5, earnings: 36770},
//   {qtr: 4, earnings: 98970}
// ];


// class Container extends Component {
//   // state = {
//   //   name: "Arnab",
//   //   age:"18"
//     // email: "",
//     // username: "",
//     // compname: ""
//   // };
//   // componentWillMount() {
//   //   fetch("http://localhost:4000/")
//   //     .then(data => {
//   //       return data.json();
//   //     })
//   //     .then(dataObj => {
//   //       this.setState({
//   //         name: dataObj.name,
//   //         age: dataObj.age
//           // email: dataObj[0].email,
//           // username: dataObj[0].username,
//           // compname: dataObj[0].company.name
//   //       });
//   //       console.log(this.state.name, this.state.age);
//   //     });
//   // }
//   render() {
//     return (
//       <div className="Container">
//         <h3>Quarterly Earnings</h3>
//         <VictoryChart domainPadding={155}>
//         <VictoryAxis
//             tickValues={["Qtr 1", "Qtr 2", "Qtr 3", "Qtr 4"]}
//           />
//           <VictoryAxis
//             dependentAxis={true}
//             tickFormat={(x) => (`$${x / 1000}M`)}
//           />
//           <VictoryBar 
          
//             style={{ data: { fill: "#000000" } }}
//             alignment="start"        
//             data={data}
//             x={"quarter"}
//             y={"earnings"}

//           />
//         </VictoryChart>
        
//       </div>
//     );
//   }
// }

// export default Container;

import {Polar} from 'react-chartjs-2';

class Container extends Component {
  state = {  }
  data = {
    labels: [
      'QTR1',
      'QTR2',
      'QTR3',
      'QTR4'
    ],
    datasets: [{
      data: [230, 200, 325, 272],
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
    return ( <div className="Container">
      <h3>Quarterly Earnings</h3>
      <Polar data={this.data} />
    </div> );
  }
}
export default Container;
