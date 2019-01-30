import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Sld from './Sld.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> Single Line Diagram </h1>
        <Sld/>
      </div>
    );
  }
}

export default App;
