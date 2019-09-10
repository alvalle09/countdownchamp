import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          deadLine: 'December 26, 2017'
      }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadLine}</div>
        <div>
          <div className="Clock-days">65 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <input placeholder="new date" />
        <button>Submit</button>
      </div>
    );
  }
}

export default App;
