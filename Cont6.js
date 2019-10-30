import React , { Component } from "react";
import "./Cont6.css";

class Cont6 extends Component {
 state = {};
 
 
 render() { 
    return ( <div className="Cont6">
      <h2>New Customer</h2>
      <h1>10789</h1>
      <table>
          <tr>
            <th>Previous</th>
            <th>Change</th>
            <th>Trend</th>
         </tr>
         <tr>
             <td>17978</td>
             <td>7189</td>
             <td>-</td>
         </tr>

      </table>

      
    </div> );
    
  }

}
export default Cont6;


