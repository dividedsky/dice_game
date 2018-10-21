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
    console.log(number);
    console.log(e.target.value);
    this.setState({ die1: number });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Die rollDie={this.rollDie} number={this.state.die1}/>
        </header>
      </div>
    );
  }
}

export default App;
