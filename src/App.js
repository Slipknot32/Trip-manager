import React, {Component} from 'react';
import './index.css'
import GoogleApiWrapper from './Components/google-map.js';


class App extends Component {
	render(){
     return(
        <div className="container">
        <div className = "map">
        <GoogleApiWrapper/>   
        </div>
        <div className="datepicker">
        
        </div>
        <div className="calendar">
        
        </div>
        </div>
        );
 }	
}
export default App;