import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Find the Largest Region</h2>
          <Matrix />
        </div>
      </div>
    );
  }
}

export default App;
