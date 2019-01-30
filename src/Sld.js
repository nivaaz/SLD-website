import React from 'react'
import './App.css';
import './Sld.css';
import CircuitBreaker from './CircuitBreaker';

class Sld extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            poleNumber: 6, 
            cbRight: [20],
            cbLeft: [20]
            }
    }
    render() {
        return (
            <div>
            <h1> I'm SLD </h1>
            <h1> The number of poles is {this.state.poleNumber} </h1>
            <CircuitBreaker 
            poleNumber = {this.state.poleNumber}
            cbRight = {this.state.cbRight}
            cbLeft = {this.state.cbLeft}
            
            />
            <div class='line' ></div>            
            </div>
        );
    }
}
export default Sld;