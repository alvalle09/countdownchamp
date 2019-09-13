import React, { Component } from "react";
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          deadLine: 'December 26, 2017',
          newDeadline: ''
          
      }
  }

  changeDeadline() {
      console.log('state', this.state);
      this.setState({deadLine: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadLine}</div>
        <Clock 
          deadLine={this.state.deadLine}
        />
        
        <input placeholder="new date" 
          onChange={event => this.setState({newDeadline: event.target.value})}
        />
        <button onClick={() => this.changeDeadline()}>
            Submit
        </button>
      </div>
    );
  }
}

export default App;
