/* sub class of SLd */

import React from 'react'
import Switch from './images/switch.png';


class CircuitBreaker extends React.Component {
    function renderBreaker(){
     return <div> </div>   
    }
    render() {
        return (
            <div>
            
            <h1> I'm Circuit Breaker </h1>
            
            <img src={Switch} alt="switch"/>
            <p> {this.props.cbRight[0]} Amps </p>

            </div>
        );
    }
    
}

export default CircuitBreaker;