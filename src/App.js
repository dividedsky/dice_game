import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './components/Die';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dice: {
        die1: 0,
         die2: 0,
         die3: 0,
         die4: 0,
         die5: 0,
         die6: 0,
      },
      total: 0,
    }
  }

  getTotal() {
    const nums = Object.values(this.state.dice);
    console.log('nums:', nums);
    const sum = nums.reduce((t, n) => t + n);
    return sum;
  }

  rollDie = (e) => {
    console.log('roll');
    console.log(this.state.dice[e.target.id]);
    const number = Math.floor(Math.random() * 6 + 1);
    const newDice = {...this.state.dice, [e.target.id]: number}
    this.setState({ dice: newDice });
    console.log(this.state.dice);
    this.setState({ total: this.getTotal() });
    console.log(this.state.dice);
  }

  // dice should be mapped!
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      <div className="die-container">
        <Die classnName="p1dice" id="die1" rollDie={this.rollDie} number={this.state.dice.die1}/>
        <Die classnName="p1dice" id="die2" rollDie={this.rollDie} number={this.state.dice.die2}/>
        <Die classnName="p1dice" id="die3" rollDie={this.rollDie} number={this.state.dice.die3}/>
        <Die classnName="p1dice" id="die4" rollDie={this.rollDie} number={this.state.dice.die4}/>
        <Die classnName="p1dice" id="die5" rollDie={this.rollDie} number={this.state.dice.die5}/>
        <Die classnName="p1dice" id="die6" rollDie={this.rollDie} number={this.state.dice.die6}/>
      </div>
        <p>Total: {this.state.total}</p>
        </header>
      </div>
    );
  }
}

export default App;
