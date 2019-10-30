import React , { Component } from "react";
import "./Cont4.css";

class Cont4 extends Component {
 state = {};
 
 
 render() { 
    return ( <div className="Cont4">
      <h3>Gross Profit</h3>
      <h1>$192.13M</h1>
      <table>
          <tr>
            <th>Previous</th>
            <th>Change</th>
            <th>Trend</th>
         </tr>
         <tr>
             <td>$183.61M</td>
             <td>4.43%</td>
             <td>+</td>
         </tr>

      </table>

      
    </div> );
    
  }

}
export default Cont4;


