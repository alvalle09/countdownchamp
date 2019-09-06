import React, { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Countdown to December 25, 2019</div>
        <div>
          <div>65 days</div>
          <div>30 hours</div>
          <div>15 minutes</div>
          <div>20 seconds</div>
        </div>
        <input placeholder="new date" />
        <button>Submit</button>
      </div>
    );
  }
}

export default App;
