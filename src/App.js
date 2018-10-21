import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './components/Die';

class App extends Component {
  constructor() {
    super();
    this.state = {
      die1: null,
      die2: null,
    }
  }

  rollDie = (e) => {
    const number = Math.floor(Math.random() * 6 + 1);
    console.log(e.target.id);
    this.setState({ [e.target.id]: number });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Die id="die1" rollDie={this.rollDie} number={this.state.die1}/>
        <Die id="die2" rollDie={this.rollDie} number={this.state.die2}/>
        </header>
      </div>
    );
  }
}

export default App;
