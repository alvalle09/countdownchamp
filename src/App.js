import React, { Component } from "react";
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
        <div>
          <div className="Clock-days">65 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
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
