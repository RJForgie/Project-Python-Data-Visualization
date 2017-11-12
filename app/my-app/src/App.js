import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from "./containers/MainContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello world
        </p>
        <MainContainer />
      </div>
    );
  }
}

export default App;
