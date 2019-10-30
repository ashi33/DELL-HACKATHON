import React , { Component } from "react";
import "./Cont5.css";

class Cont5 extends Component {
 state = {};
 
 
 render() { 
    return ( <div className="Cont5">
      <h2>Customer Satisfaction</h2>
      <h1>93.13%</h1>
      <table>
          <tr>
            <th>Previous</th>
            <th>Change</th>
            <th>Trend</th>
         </tr>
         <tr>
             <td>79.8%</td>
             <td>14.29%</td>
             <td>+</td>
         </tr>

      </table>

      
    </div> );
    
  }

}
export default Cont5;


